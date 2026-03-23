'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AnimatedStatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: number; // percentage change
  subtext?: string;
  color?: 'cyan' | 'emerald' | 'amber' | 'red' | 'blue';
  index?: number;
}

const colorConfig: Record<string, { bg: string; text: string; accent: string; glow: string }> = {
  cyan: {
    bg: 'from-cyan-500/5 to-cyan-600/5',
    text: 'text-cyan-400',
    accent: 'bg-cyan-400',
    glow: 'shadow-[0_0_20px_rgba(0,240,255,0.2)]',
  },
  emerald: {
    bg: 'from-emerald-500/5 to-emerald-600/5',
    text: 'text-emerald-400',
    accent: 'bg-emerald-400',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]',
  },
  amber: {
    bg: 'from-amber-500/5 to-amber-600/5',
    text: 'text-amber-400',
    accent: 'bg-amber-400',
    glow: 'shadow-[0_0_20px_rgba(251,146,60,0.2)]',
  },
  red: {
    bg: 'from-red-500/5 to-red-600/5',
    text: 'text-red-400',
    accent: 'bg-red-400',
    glow: 'shadow-[0_0_20px_rgba(248,113,113,0.2)]',
  },
  blue: {
    bg: 'from-blue-500/5 to-blue-600/5',
    text: 'text-blue-400',
    accent: 'bg-blue-400',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
  },
};

export default function AnimatedStatCard({
  label,
  value,
  icon,
  trend,
  subtext,
  color = 'cyan',
  index = 0,
}: AnimatedStatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const config = colorConfig[color];
  const numValue = typeof value === 'number' ? value : parseInt(String(value), 10);
  const isTrendPositive = trend ? trend >= 0 : null;

  // Counter animation
  useEffect(() => {
    let start = 0;
    const end = numValue;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(counter);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [numValue]);

  const containerVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="h-full"
    >
      <motion.div
        className={`relative h-full p-6 rounded-lg border border-slate-800/50 bg-gradient-to-br ${config.bg} backdrop-blur-sm overflow-hidden group`}
        whileHover={{
          borderColor: 'rgba(0, 240, 255, 0.3)',
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Glow */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${config.glow}`}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Corner Accent Animation */}
        <motion.div
          className={`absolute top-0 right-0 w-24 h-24 ${config.accent} opacity-5 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10">
          {/* Header with Icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                {label}
              </p>
            </div>
            {icon && (
              <motion.div
                className={`flex-shrink-0 ${config.text} opacity-60`}
                animate={{
                  y: [0, -2, 0],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {icon}
              </motion.div>
            )}
          </div>

          {/* Main Value */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.1 }}
            className="mb-3"
          >
            <h3 className={`text-3xl font-black font-mono ${config.text} mb-1`}>
              {displayValue}
              {typeof value === 'string' && !value.match(/^\d+$/) ? value.match(/[a-zA-Z%]+$/)?.[0] : ''}
            </h3>

            {/* Subtext */}
            {subtext && (
              <p className="text-xs text-slate-400">{subtext}</p>
            )}
          </motion.div>

          {/* Trend */}
          {trend !== undefined && (
            <motion.div
              className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest ${
                isTrendPositive ? 'text-emerald-400' : 'text-red-400'
              }`}
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isTrendPositive ? (
                <TrendingUp size={14} strokeWidth={1.5} />
              ) : (
                <TrendingDown size={14} strokeWidth={1.5} />
              )}
              <span>{Math.abs(trend)}%</span>
            </motion.div>
          )}

          {/* Bottom Accent Bar */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-${color}-400 to-transparent`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
