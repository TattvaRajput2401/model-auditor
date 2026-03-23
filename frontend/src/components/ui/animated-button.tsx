'use client';

import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  isLoading?: boolean;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      children,
      isLoading = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'flex items-center justify-center gap-2 font-headline uppercase tracking-widest rounded-sm transition-all duration-200 relative overflow-hidden';

    const variants: Record<string, string> = {
      primary:
        'bg-cyan-400 text-black font-bold shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
      secondary:
        'bg-slate-700 text-white font-bold hover:bg-slate-600 hover:scale-[1.02] active:scale-[0.98]',
      outline:
        'border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:bg-cyan-400/5 hover:scale-[1.02] active:scale-[0.98]',
      ghost:
        'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 hover:scale-[1.02] active:scale-[0.98]',
    };

    const sizes: Record<string, string> = {
      sm: 'px-3 py-2 text-xs',
      md: 'px-4 py-3 text-sm',
      lg: 'px-6 py-4 text-base',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading || disabled}
        {...(props as any)}
      >
        <motion.div
          animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 2, repeat: isLoading ? Infinity : 0 }}
          className="flex items-center"
        >
          {icon}
        </motion.div>
        {children}
      </button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
