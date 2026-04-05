import React, { useState, useRef, useEffect } from 'react'
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from 'react-icons/lu'
import AIResponsePreview from '../../pages/InterviewPrep/components/AIResponsePreview';

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight + 16);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="rounded-2xl mb-3 overflow-hidden group transition-all duration-200"
      style={{
        background: '#ffffff',
        border: isPinned ? '1.5px solid #C4B5FD' : '1px solid #EEE9FF',
        boxShadow: isPinned
          ? '0 4px 20px rgba(139,92,246,0.12)'
          : '0 2px 12px rgba(100,70,200,0.05)',
      }}
    >
      {/* Pinned indicator strip */}
      {isPinned && (
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #A78BFA, #818CF8)' }} />
      )}

      <div className="py-4 px-5">
        {/* Question row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5 flex-1 cursor-pointer" onClick={toggleExpand}>
            <span className="text-sm font-bold mt-0.5 shrink-0" style={{ color: '#FF9324', fontFamily: 'Sora, sans-serif' }}>Q</span>
            <h3 className="text-sm font-medium leading-relaxed" style={{ color: '#1a1a2e' }}>
              {question}
            </h3>
          </div>

          {/* Action buttons */}
          <div className={`flex items-center gap-1.5 shrink-0 ${isExpanded ? 'flex' : 'hidden group-hover:flex'}`}>
            <button
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                background: isPinned ? '#EDE9FE' : '#F5F3FF',
                color: isPinned ? '#6D28D9' : '#7C3AED',
                border: `1px solid ${isPinned ? '#C4B5FD' : '#DDD6FE'}`,
              }}
              onClick={onTogglePin}
              title={isPinned ? 'Unpin' : 'Pin'}
            >
              {isPinned ? <LuPinOff size={13} /> : <LuPin size={13} />}
              <span className="hidden md:inline">{isPinned ? 'Unpin' : 'Pin'}</span>
            </button>

            <button
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                background: '#FFF8ED',
                color: '#C05700',
                border: '1px solid #FFD0A0',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FFEDD5'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FFF8ED'; }}
              onClick={() => { setIsExpanded(true); onLearnMore(); }}
            >
              <LuSparkles size={12} />
              <span className="hidden md:inline">Learn More</span>
            </button>
          </div>

          <button
            className="text-gray-300 hover:text-gray-500 transition-colors duration-200 cursor-pointer shrink-0"
            onClick={toggleExpand}
          >
            <LuChevronDown
              size={18}
              className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Answer expand area */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div
            ref={contentRef}
            className="mt-4 rounded-xl px-5 py-4 text-sm"
            style={{ background: '#FAFAFA', border: '1px solid #F0EEF8' }}
          >
            <AIResponsePreview content={answer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
