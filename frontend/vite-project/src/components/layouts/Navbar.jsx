import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";
import { LuBrain } from 'react-icons/lu';

const Navbar = () => {
  return (
    <div className="h-16 sticky top-0 z-30" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(238,233,255,0.8)', boxShadow: '0 1px 16px rgba(100,70,200,0.06)' }}>
      <div className="container mx-auto flex items-center justify-between px-6 h-full">
        <Link to="/dashboard" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #FF9324, #FCD760)' }}>
            <LuBrain className="text-white text-sm" />
          </div>
          <span className="text-lg font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>
            Interview Prep <span style={{ color: '#FF9324' }}>AI</span>
          </span>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar
