import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { getInitials } from '../../utils/helper'
import { LuLogOut } from 'react-icons/lu'

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    clearUser()
    navigate('/')
  }

  return (
    user && (
      <div className="flex items-center gap-3">
        {/* Avatar */}
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
            style={{ border: '2px solid #FFD0A0', boxShadow: '0 2px 8px rgba(255,147,36,0.2)' }}
          />
        ) : (
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, #FF9324, #FCD760)',
              color: '#fff',
              fontFamily: 'Sora, sans-serif',
              boxShadow: '0 2px 8px rgba(255,147,36,0.3)',
            }}
          >
            {getInitials(user.name)}
          </div>
        )}

        {/* Name */}
        <div className="hidden md:block">
          <div className="text-sm font-semibold" style={{ color: '#1a1a2e', fontFamily: 'Sora, sans-serif' }}>
            {user.name || ''}
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
          style={{ background: '#F5F3FF', color: '#6B7280', border: '1px solid #EEE9FF' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FFEDD5'; e.currentTarget.style.color = '#C05700'; e.currentTarget.style.borderColor = '#FFD0A0'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F5F3FF'; e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.borderColor = '#EEE9FF'; }}
        >
          <LuLogOut size={13} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    )
  )
}

export default ProfileInfoCard
