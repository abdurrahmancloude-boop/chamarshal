import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Karahi Pot & Flame Icon */}
      <div 
        className={`relative flex items-center justify-center rounded-xl bg-[#2B613B] text-white shadow-xs transition-transform hover:scale-105 ${
          isSm ? 'w-9 h-9' : isLg ? 'w-14 h-14' : 'w-10 h-10 sm:w-11 sm:h-11'
        }`}
      >
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={isSm ? 'w-5 h-5' : isLg ? 'w-8 h-8' : 'w-6 h-6'}
        >
          {/* Subtle Flame / Steam above Karahi */}
          <path 
            d="M17 11C17 9 18 7 20 6C22 7 23 9 23 11C23 12.5 21.8 13.5 20 13.5C18.2 13.5 17 12.5 17 11Z" 
            fill="#F59E0B"
          />
          <path 
            d="M13 13C13 11.5 13.8 10 15 9.5C15.8 10.5 16 12 15.5 13C15 14 13.8 14.2 13 13Z" 
            fill="#FBBF24"
            opacity="0.9"
          />
          <path 
            d="M27 13C27 11.5 26.2 10 25 9.5C24.2 10.5 24 12 24.5 13C25 14 26.2 14.2 27 13Z" 
            fill="#FBBF24"
            opacity="0.9"
          />
          
          {/* Traditional Karahi Pot Bowl */}
          <path 
            d="M9 16C9 23 14 27.5 20 27.5C26 27.5 31 23 31 16H9Z" 
            fill="#FFFDF9" 
          />
          {/* Pot Rim */}
          <rect 
            x="7" 
            y="14.5" 
            width="26" 
            height="2.5" 
            rx="1.25" 
            fill="#FFFDF9" 
          />
          {/* Left Karahi Handle */}
          <path 
            d="M7 16C4.8 16 3.5 17.8 4 19.8C4.4 21.4 6 22 7.5 21.5" 
            stroke="#FFFDF9" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          {/* Right Karahi Handle */}
          <path 
            d="M33 16C35.2 16 36.5 17.8 36 19.8C35.6 21.4 34 22 32.5 21.5" 
            stroke="#FFFDF9" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          {/* Base Stand */}
          <path 
            d="M15 28L13 32M25 28L27 32" 
            stroke="#FFFDF9" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          {/* Karahi Food Garnish Accent */}
          <circle cx="20" cy="19.5" r="1.5" fill="#C2410C" />
          <path d="M16 20C17 21 19 21.5 21 21" stroke="#2B613B" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span 
          className={`font-serif font-bold tracking-tight text-[#1F1E1B] leading-none ${
            isSm ? 'text-lg' : isLg ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          Butt Karahi
        </span>
        <span 
          className={`font-medium tracking-wide uppercase text-[#5C564E] mt-0.5 ${
            isSm ? 'text-[9px]' : isLg ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-[11px]'
          }`}
        >
          Commercial Market
        </span>
      </div>
    </div>
  );
};
