"use client";
import React from "react";

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`relative w-[52px] h-8 border bg-[#E7DAFE] flex items-center rounded-[11px] cursor-pointer transition-all duration-300
        ${enabled ? "border-r-0" : "border-l-0"}`}
    >
      {/* Sliding white block */}
      <span
        className={`absolute w-8 h-8 border-[0.4px] border-r-[3.4px] border-[#000000] bg-white rounded-[10px] shadow-md transform transition-transform duration-300 flex items-center justify-center
          ${enabled ? "translate-x-5" : "translate-x-0"}`}
      >
        {/* Center dot */}
        <span className="w-4 h-4 rounded-full border border-[#000000] " />
      </span>
    </div>
  );
};

export default ToggleSwitch;
