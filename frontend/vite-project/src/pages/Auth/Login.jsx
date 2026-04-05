import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { LuBrain, LuSparkles } from 'react-icons/lu'

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { updateUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!validateEmail(email)) { setError('Please enter a valid email address'); return }
    if (!password) { setError('Please enter your password'); return }
    setError('')
    setIsLoading(true)
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password })
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
    <div className="w-[90vw] md:w-[380px] p-8 flex flex-col">
      {/* Brand */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF9324, #FCD760)' }}>
          <LuBrain className="text-white text-sm" />
        </div>
        <span className="text-base font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>Interview Prep AI</span>
      </div>

      <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>Welcome back</h3>
      <p className="text-sm text-gray-500 mb-7">Enter your details to continue your preparation journey.</p>

      <form onSubmit={handleLogin} className="space-y-1">
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

        <button
          type="submit"
          className="btn-primary mt-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Signing in...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <LuSparkles size={14} /> Sign In
            </span>
          )}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-5 text-center">
        Don't have an account?{' '}
        <button
          className="font-semibold cursor-pointer hover:underline transition-colors"
          style={{ color: '#FF9324' }}
          onClick={() => setCurrentPage('signup')}
        >
          Create one free
        </button>
      </p>
    </div>
  )
}

export default Login
