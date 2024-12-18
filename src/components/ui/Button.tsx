import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'glass-button px-6 py-2 font-medium',
        variant === 'primary' && 'bg-green-500 text-white hover:bg-green-600',
        variant === 'secondary' && 'bg-white/50 text-gray-800 hover:bg-white/60',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}