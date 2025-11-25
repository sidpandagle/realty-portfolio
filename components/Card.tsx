import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-card-bg rounded-2xl border border-border p-8 ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-red cursor-pointer'
          : 'shadow-md'
      } ${className}`}
    >
      {children}
    </div>
  );
}
