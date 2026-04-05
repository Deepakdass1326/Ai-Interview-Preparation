import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="mb-1">
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase" style={{ letterSpacing: '0.04em' }}>
        {label}
      </label>
      <div className="input-box flex items-center gap-2">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type === 'password' && (
          showPassword ? (
            <FaRegEye
              size={17}
              className="text-gray-400 cursor-pointer hover:text-orange-400 transition-colors shrink-0"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaRegEyeSlash
              size={17}
              className="text-gray-400 cursor-pointer hover:text-orange-400 transition-colors shrink-0"
              onClick={() => setShowPassword(true)}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Input
