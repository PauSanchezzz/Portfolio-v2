import React from 'react';
import Image from 'next/image';
import { Technology } from '@/types';

interface TechnologyBadgeProps {
  technology: Technology;
  size?: 'sm' | 'md' | 'lg';
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  technology,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2',
  };
  
  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };
  
  return (
    <span
      className={`
        inline-flex items-center rounded-full
        bg-white/5 backdrop-blur-sm
        border border-white/10
        ${technology.hoverColor}
        transition-all duration-300
        hover:scale-105 hover:border-white/30
        ${sizeClasses[size]}
      `}
    >
      {technology.icon && (
        <Image
          src={technology.icon}
          alt={technology.name}
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="object-contain"
        />
      )}
      <span className="font-medium text-slate-200">{technology.name}</span>
    </span>
  );
};
