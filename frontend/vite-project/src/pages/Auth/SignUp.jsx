import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'
import { validateEmail } from '../../utils/helper'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import uploadImage from '../../utils/uploadImage'
import { LuBrain, LuUserPlus } from 'react-icons/lu'

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { updateUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    let profileImageUrl = ''

    if (!fullName) { setError('Please enter your full name'); return }
    if (!validateEmail(email)) { setError('Please enter a valid email address'); return }
    if (!password) { setError('Please enter a password'); return }

    setError('')
    setIsLoading(true)

    try {
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic)
        profileImageUrl = imgUploadRes.imageUrl || ''
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl,
      })

      const { token } = response.data
      if (token) {
        localStorage.setItem('token', token)
        updateUser(response.data)
        navigate('/dashboard')
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-[90vw] md:w-[400px] p-8 flex flex-col">
      {/* Brand */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF9324, #FCD760)' }}>
          <LuBrain className="text-white text-sm" />
        </div>
        <span className="text-base font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>Interview Prep AI</span>
      </div>

      <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>Create your account</h3>
      <p className="text-sm text-gray-500 mb-6">Join thousands preparing smarter, not harder.</p>

      <form onSubmit={handleSignup} className="space-y-1">
        <div className="flex justify-center mb-2">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        </div>

        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />

        {error && (
          <div className="text-xs font-medium px-3 py-2 rounded-lg" style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #FCA5A5' }}>
            {error}
          </div>
        )}

        <button type="submit" className="btn-primary mt-2" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Creating account...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <LuUserPlus size={14} /> Create Account
            </span>
          )}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-5 text-center">
        Already have an account?{' '}
        <button
          className="font-semibold cursor-pointer hover:underline"
          style={{ color: '#FF9324' }}
          onClick={() => setCurrentPage('login')}
        >
          Sign in
        </button>
      </p>
    </div>
  )
}

export default SignUp
