import React from 'react'
import { LuX } from 'react-icons/lu'

const Drawer = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`fixed top-[64px] right-0 z-40 h-[calc(100dvh-64px)] w-full md:w-[40vw] bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h5
          id="drawer-right-label"
          className="text-base font-semibold text-gray-900"
        >
          {title}
        </h5>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-900"
        >
          <LuX className="text-lg" />
        </button>
      </div>

      {/* Body Content */}
      <div className="p-4 text-sm overflow-y-auto h-[calc(100%-64px)]">
        {children}
      </div>
    </div>
  )
}

export default Drawer
