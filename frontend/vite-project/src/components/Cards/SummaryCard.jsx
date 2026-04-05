import React from "react";
import { LuTrash2, LuBrain, LuClock, LuMessageSquare } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      onClick={onSelect}
      className="relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: '#ffffff',
        border: '1px solid #EEE9FF',
        boxShadow: '0 2px 16px rgba(100,70,200,0.06)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(100,70,200,0.14)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = '#C4B5FD';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 16px rgba(100,70,200,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#EEE9FF';
      }}
    >
      {/* Header Band */}
      <div
        className="h-24 flex items-end px-5 pb-4 relative"
        style={{ background: colors?.bgcolor || 'linear-gradient(135deg, #F0EEFF, #FFECD2)' }}
      >
        {/* Initials badge */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'rgba(255,255,255,0.9)' }}>
          <span className="text-lg font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>
            {getInitials(role)}
          </span>
        </div>

        {/* Delete Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="absolute top-3 right-3 hidden group-hover:flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-all duration-200"
          style={{ background: 'rgba(255,255,255,0.9)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.2)' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FEF2F2'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; }}
        >
          <LuTrash2 size={13} />
          Delete
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4">
        <div>
          <h2 className="text-[15px] font-bold leading-snug mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>
            {role}
          </h2>
          <p className="text-xs text-gray-500 line-clamp-1">{topicsToFocus}</p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-purple">
            <LuBrain size={11} />
            {experience} {experience == 1 ? 'Yr' : 'Yrs'}
          </span>
          <span className="badge badge-orange">
            <LuMessageSquare size={11} />
            {questions} Q&A
          </span>
          <span className="badge badge-neutral">
            <LuClock size={11} />
            {lastUpdated}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
