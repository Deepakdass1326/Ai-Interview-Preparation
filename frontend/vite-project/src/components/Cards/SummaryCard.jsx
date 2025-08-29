import React from "react";
import { LuTrash2 } from "react-icons/lu";
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
      className="relative group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
    >
      {/* Header with Role Initials */}
      <div
        className="p-4 rounded-t-xl"
        style={{ background: colors?.bgcolor }}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-lg font-semibold text-gray-900">
              {getInitials(role)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-3">
        {/* Title + Topics */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[17px] font-semibold text-gray-900 leading-snug">
              {role}
            </h2>
            <p className="text-xs text-gray-600">{topicsToFocus}</p>
          </div>
        </div>

        {/* Experience, Questions, Updated */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-[11px] font-medium text-gray-900 px-3 py-1 border border-gray-300 rounded-full">
            {experience} {experience == 1 ? "Year" : "Years"}
          </span>

          <span className="text-[11px] font-medium text-gray-900 px-3 py-1 border border-gray-300 rounded-full">
            {questions} Q&A
          </span>

          <span className="text-[11px] font-medium text-gray-900 px-3 py-1 border border-gray-300 rounded-full">
            Last Updated: {lastUpdated}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 font-medium line-clamp-2">
          {description}
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute top-2 right-2 hidden group-hover:flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded px-2.5 py-1 transition"
      >
        <LuTrash2 className="text-sm" />
        Delete
      </button>
    </div>
  );
};

export default SummaryCard;
