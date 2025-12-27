import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false,
}) => {
  const baseClasses = 'glass rounded-2xl p-6';
  const hoverClasses = hover ? 'glass-hover' : '';
  const glowClasses = glow ? 'glow' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}>
      {children}
    </div>
  );
};
