'use client';

import { motion } from 'framer-motion';
import { Edit2, Trash2, Play, Radio } from 'lucide-react';

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'monitoring';
  uptime: number;
  lastUpdated: string;
}

interface AnimatedAgentCardProps {
  agent: Agent;
  index?: number;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onStart?: (id: string) => void;
}

export default function AnimatedAgentCard({
  agent,
  index = 0,
  onEdit,
  onDelete,
  onStart,
}: AnimatedAgentCardProps) {
  const statusColors: Record<string, { bg: string; text: string; pulse: string }> = {
    active: { bg: 'bg-green-500/10', text: 'text-green-400', pulse: 'bg-green-400' },
    inactive: { bg: 'bg-slate-500/10', text: 'text-slate-400', pulse: 'bg-slate-400' },
    monitoring: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', pulse: 'bg-cyan-400' },
  };

  const colors = statusColors[agent.status];

  // Container animation
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
      },
    },
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      borderColor: 'rgb(30, 41, 59)',
      boxShadow: '0 0 0 rgba(0, 240, 255, 0)',
    },
    hover: {
      scale: 1.02,
      y: -4,
      borderColor: 'rgb(0, 240, 255)',
      boxShadow: '0 0 24px rgba(0, 240, 255, 0.15), inset 0 0 1px rgba(0, 240, 255, 0.3)',
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="press"
      className="h-full"
    >
      <motion.div
        className="relative h-full bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-lg p-6 border border-slate-800/50 backdrop-blur-sm cursor-pointer transition-all duration-300 overflow-hidden group"
        variants={hoverVariants}
        initial="rest"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage:
              'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 240, 255, 0.1) 0%, transparent 80%)',
          }}
        />

        {/* Corner Accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10">
          {/* Header with Status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-primary font-headline uppercase tracking-tight mb-1 truncate">
                {agent.name}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">{agent.description}</p>
            </div>

            {/* Status Badge with Pulse Animation */}
            <motion.div
              className={`flex items-center gap-2 ml-3 px-3 py-1 rounded-full ${colors.bg} border border-slate-700/50 flex-shrink-0`}
              animate={{
                boxShadow: [
                  '0 0 0 0 currentColor',
                  `0 0 0 8px rgba(0, 0, 0, 0)`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className={`w-2 h-2 rounded-full ${colors.pulse}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                {agent.status}
              </span>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-slate-800/30">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Uptime</p>
              <motion.p
                className="text-lg font-black text-primary font-mono"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                {agent.uptime}%
              </motion.p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Last Updated</p>
              <p className="text-xs text-slate-400">{agent.lastUpdated}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <motion.button
              onClick={() => onStart?.(agent.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-cyan-400 text-black font-bold text-xs uppercase tracking-widest rounded-sm hover:shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all duration-200"
              whileHover={{ scale: 1.02, boxShadow: '0 0 16px rgba(0,240,255,0.4)' }}
              whileTap={{ scale: 0.96 }}
            >
              <Play size={14} strokeWidth={1.5} />
              <span>Execute</span>
            </motion.button>

            <motion.button
              onClick={() => onEdit?.(agent.id)}
              className="py-2 px-3 bg-slate-800/30 text-slate-400 hover:text-primary rounded-sm border border-slate-700/50 hover:border-primary/50 transition-all duration-200"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Edit2 size={16} strokeWidth={1.5} />
            </motion.button>

            <motion.button
              onClick={() => onDelete?.(agent.id)}
              className="py-2 px-3 bg-slate-800/30 text-slate-400 hover:text-red-400 rounded-sm border border-slate-700/50 hover:border-red-500/50 transition-all duration-200"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Trash2 size={16} strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
