import React from 'react'

const Modal = ({ children, isOpen, onClose, hideHeader, title }) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      style={{ background: 'rgba(15, 10, 40, 0.6)', backdropFilter: 'blur(6px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative flex flex-col overflow-hidden animate-fade-slide-up"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 32px 80px rgba(100,70,200,0.2), 0 8px 24px rgba(0,0,0,0.1)',
          border: '1px solid rgba(238,233,255,0.8)',
          maxHeight: '90vh',
        }}
      >
        {/* Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #EEE9FF' }}>
            <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif', fontSize: '17px' }}>{title}</h3>
          </div>
        )}

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer"
          style={{ background: '#F5F3FF', color: '#6B7280' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FFEDD5'; e.currentTarget.style.color = '#C05700'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F5F3FF'; e.currentTarget.style.color = '#6B7280'; }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>

        {/* Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">{children}</div>
      </div>
    </div>
  )
}

export default Modal
