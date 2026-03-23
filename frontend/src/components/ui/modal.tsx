'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export default function AnimatedModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className = '',
}: AnimatedModalProps) {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal Content */}
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`relative w-full ${sizeClasses[size]} bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg border border-slate-800/50 backdrop-blur-xl shadow-2xl overflow-hidden ${className}`}
          >
            {/* Header */}
            {title && (
              <div className="px-6 py-4 border-b border-slate-800/50 flex items-center justify-between">
                <h2 className="text-lg font-bold text-primary font-headline uppercase tracking-tight">
                  {title}
                </h2>
                <motion.button
                  onClick={onClose}
                  className="text-slate-400 hover:text-primary p-1 hover:bg-slate-800/30 rounded transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} strokeWidth={1.5} />
                </motion.button>
              </div>
            )}

            {/* Body */}
            <div className="px-6 py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {children}
            </div>

            {/* Footer */}
            {footer && (
              <div className="px-6 py-4 border-t border-slate-800/50 flex gap-3 justify-end">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
