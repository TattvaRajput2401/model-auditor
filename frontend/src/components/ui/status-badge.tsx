'use client';

import { motion } from 'framer-motion';

export interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'warning' | 'critical' | 'healthy' | 'pending';
  label?: string;
  pulse?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function StatusBadge({
  status,
  label,
  pulse = true,
  className = '',
  size = 'md',
}: StatusBadgeProps) {
  const statusConfig: Record<
    string,
    {
      bg: string;
      text: string;
      dot: string;
      pulseColor: string;
      icon: string;
    }
  > = {
    active: {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      dot: 'bg-green-400',
      pulseColor: 'rgba(74, 222, 128, 0.5)',
      icon: '●',
    },
    inactive: {
      bg: 'bg-slate-500/10',
      text: 'text-slate-400',
      dot: 'bg-slate-400',
      pulseColor: 'rgba(148, 163, 184, 0.3)',
      icon: '●',
    },
    warning: {
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-400',
      dot: 'bg-yellow-400',
      pulseColor: 'rgba(250, 204, 21, 0.5)',
      icon: '⚠',
    },
    critical: {
      bg: 'bg-red-500/10',
      text: 'text-red-400',
      dot: 'bg-red-400',
      pulseColor: 'rgba(248, 113, 113, 0.5)',
      icon: '✕',
    },
    healthy: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      dot: 'bg-emerald-400',
      pulseColor: 'rgba(16, 185, 129, 0.5)',
      icon: '✓',
    },
    pending: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      dot: 'bg-cyan-400',
      pulseColor: 'rgba(0, 240, 255, 0.5)',
      icon: '◌',
    },
  };

  const config = statusConfig[status];

  const sizeClass =
    size === 'sm' ? 'text-xs px-2 py-0.5' : size === 'lg' ? 'text-sm px-4 py-2' : 'text-xs px-3 py-1';

  const dotSize =
    size === 'sm' ? 'w-1.5 h-1.5' : size === 'lg' ? 'w-3 h-3' : 'w-2 h-2';

  return (
    <motion.div
      className={`inline-flex items-center gap-2 rounded-full border ${config.bg} border-slate-700/50 font-bold uppercase tracking-wider font-headline ${sizeClass} ${className}`}
      whileHover={
        pulse
          ? {
              boxShadow: `0 0 12px ${config.pulseColor}`,
              borderColor: 'rgba(0, 240, 255, 0.3)',
            }
          : {}
      }
      transition={{ duration: 0.2 }}
    >
      {/* Pulsing Dot */}
      <motion.div
        className={`${dotSize} ${config.dot} rounded-full`}
        animate={
          pulse
            ? {
                scale: [1, 1.2, 1],
                boxShadow: [
                  `0 0 0 0 ${config.pulseColor}`,
                  `0 0 0 6px rgba(0, 0, 0, 0)`,
                ],
              }
            : {}
        }
        transition={pulse ? { duration: 2, repeat: Infinity } : {}}
      />

      {/* Label */}
      <span className={config.text}>{label || status}</span>
    </motion.div>
  );
}
