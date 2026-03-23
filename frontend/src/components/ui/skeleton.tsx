'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  count?: number;
  height?: string;
  width?: string;
  circle?: boolean;
}

const shimmer = {
  initial: { backgroundPosition: '200% center' },
  animate: { backgroundPosition: '-200% center' },
};

export function Skeleton({
  className = '',
  height = 'h-4',
  width = 'w-full',
  circle = false,
}: SkeletonProps) {
  return (
    <motion.div
      className={`${width} ${height} ${circle ? 'rounded-full' : 'rounded-sm'} bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%]`}
      variants={shimmer}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundPosition: '200% center',
      }}
    />
  );
}

export function SkeletonCard({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="p-4 bg-slate-900/30 rounded-lg border border-slate-800/30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="space-y-3">
            <Skeleton height="h-6" width="w-2/3" />
            <Skeleton height="h-4" width="w-full" />
            <Skeleton height="h-4" width="w-5/6" />
            <div className="flex gap-2 pt-2">
              <Skeleton height="h-8" width="w-32" />
              <Skeleton height="h-8" width="w-24" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="grid grid-cols-5 gap-4 p-4 bg-slate-900/50 rounded-lg">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} height="h-4" width="w-full" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <motion.div
          key={i}
          className="grid grid-cols-5 gap-4 p-4 bg-slate-900/20 rounded-lg border border-slate-800/30"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: (i + 1) * 0.05 }}
        >
          {Array.from({ length: 5 }).map((_, j) => (
            <Skeleton key={j} height="h-4" width="w-full" />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export function SkeletonStats({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-lg border border-slate-800/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Skeleton height="h-4" width="w-1/2" className="mb-4" />
          <Skeleton height="h-8" width="w-3/4" className="mb-2" />
          <Skeleton height="h-3" width="w-full" />
        </motion.div>
      ))}
    </div>
  );
}

export function SkeletonLine({ className = '' }: { className?: string }) {
  return (
    <Skeleton
      height="h-3"
      width="w-full"
      className={className}
    />
  );
}
