'use client';

import { motion } from 'framer-motion';
import { Copy, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useState } from 'react';

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'success';
  message: string;
  source: string;
}

interface AnimatedLogRowProps {
  log: LogEntry;
  index: number;
  onCopy?: (message: string) => void;
}

export default function AnimatedLogRow({ log, index, onCopy }: AnimatedLogRowProps) {
  const [copied, setCopied] = useState(false);

  const levelConfig: Record<
    string,
    {
      bg: string;
      text: string;
      border: string;
      icon: React.ElementType;
      pulse: string;
    }
  > = {
    info: {
      bg: 'bg-blue-500/5',
      text: 'text-blue-400',
      border: 'border-blue-500/20',
      icon: Info,
      pulse: 'bg-blue-400',
    },
    warning: {
      bg: 'bg-yellow-500/5',
      text: 'text-yellow-400',
      border: 'border-yellow-500/20',
      icon: AlertCircle,
      pulse: 'bg-yellow-400',
    },
    error: {
      bg: 'bg-red-500/5',
      text: 'text-red-400',
      border: 'border-red-500/20',
      icon: AlertCircle,
      pulse: 'bg-red-400',
    },
    success: {
      bg: 'bg-green-500/5',
      text: 'text-green-400',
      border: 'border-green-500/20',
      icon: CheckCircle,
      pulse: 'bg-green-400',
    },
  };

  const config = levelConfig[log.level];
  const IconComponent = config.icon;

  const rowVariants = {
    initial: {
      opacity: 0,
      x: -20,
      y: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  const hoverVariants = {
    rest: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: `rgba(0, 0, 0, 0.1)`,
      x: 0,
    },
    hover: {
      backgroundColor: `rgba(0, 0, 0, 0.1)`,
      borderColor: `rgba(0, 240, 255, 0.2)`,
      x: 4,
    },
  };

  const handleCopy = () => {
    onCopy?.(log.message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={rowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      className="group"
    >
      <motion.div
        className={`relative py-3 px-4 border rounded-sm transition-all duration-300 overflow-hidden ${config.bg} ${config.border}`}
        variants={hoverVariants}
        initial="rest"
      >
        {/* Animated left accent bar */}
        <motion.div
          className={`absolute left-0 top-0 bottom-0 w-1 ${config.pulse}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            delay: index * 0.05 + 0.1,
            duration: 0.3,
          }}
        />

        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 border-l-4 ${config.pulse} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`}
          initial={false}
        />

        <div className="relative z-10 flex items-start gap-4">
          {/* Icon with animation */}
          <motion.div
            className={`flex-shrink-0 ${config.text}`}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              delay: index * 0.05 + 0.1,
              duration: 2,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <IconComponent size={18} strokeWidth={1.5} />
          </motion.div>

          {/* Log Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold uppercase tracking-widest ${config.text}`}>
                    {log.level}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{log.timestamp}</span>
                </div>
              </div>

              {/* Copy Button */}
              <motion.button
                onClick={handleCopy}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 py-1 px-2 hover:bg-slate-800/30 rounded text-slate-400 hover:text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <CheckCircle size={16} strokeWidth={1.5} className="text-green-400" />
                  </motion.div>
                ) : (
                  <Copy size={16} strokeWidth={1.5} />
                )}
              </motion.button>
            </div>

            {/* Message */}
            <motion.p
              className="text-sm text-slate-300 font-mono break-all word-break"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 + 0.15, duration: 0.3 }}
            >
              {log.message}
            </motion.p>

            {/* Source */}
            <motion.p
              className="text-[10px] text-slate-500 mt-2 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
            >
              Source: {log.source}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
