import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200/60 shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-full">
        <Link 
          to="/dashboard" 
          className="text-lg md:text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200"
        >
          Interview Prep AI
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar
