import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'alt';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className = '',
  background = 'default',
}) => {
  const bgClasses = background === 'alt' ? 'bg-white/[0.02]' : '';
  
  return (
    <section id={id} className={`section ${bgClasses} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};
