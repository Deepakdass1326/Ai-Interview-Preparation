import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Navbar from './Navbar'

const DashboardLayout = ({children}) => {
    const {user} = useContext(UserContext)
  return (
    <div style={{ minHeight: '100vh', background: '#F8F7FF' }}>
      <Navbar />
      {user && <div className="container mx-auto px-4 md:px-6 py-6">{children}</div>}
    </div>
  )
}

export default DashboardLayout
