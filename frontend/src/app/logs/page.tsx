'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '@/components/ui/dashboard-layout';
import AnimatedLogRow, { LogEntry } from '@/components/ui/log-row';
import PageTransition from '@/components/ui/page-transition';
import StatusBadge from '@/components/ui/status-badge';
import { Search } from 'lucide-react';

const mockLogs: LogEntry[] = [];

export default function LogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState<'all' | 'info' | 'warning' | 'error' | 'success'>('all');
  const logs = mockLogs;

  const filtered = logs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || log.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const stats = {
    info: logs.filter((l) => l.level === 'info').length,
    warning: logs.filter((l) => l.level === 'warning').length,
    error: logs.filter((l) => l.level === 'error').length,
    success: logs.filter((l) => l.level === 'success').length,
  };

  return (
    <PageTransition>
      <DashboardLayout>
        <div className="pt-8 pb-16 px-6 md:px-0">
          {/* Header */}
          <motion.header 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-primary mb-2 uppercase">
              Audit <span className="text-cyan-400">Logs</span>
            </h1>
            <p className="text-slate-400 font-body text-sm">Real-time event monitoring and log viewer</p>
          </motion.header>

          {/* Filters */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800/50 text-slate-300 px-4 py-3 pl-10 rounded-sm focus:ring-0 focus:border-cyan-400/50 transition-all placeholder:text-slate-500"
              />
            </div>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value as typeof filterLevel)}
              className="w-full bg-slate-900/50 border border-slate-800/50 text-slate-300 px-4 py-3 rounded-sm focus:ring-0 focus:border-cyan-400/50 transition-all"
            >
              <option value="all">All Levels</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="success">Success</option>
            </select>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-500/5 to-blue-600/5 p-4 border border-blue-500/20 rounded-sm"
              whileHover={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
            >
              <p className="text-xs uppercase tracking-widest text-slate-400 font-headline font-bold mb-1">Info Logs</p>
              <p className="text-2xl font-bold text-blue-400">{stats.info}</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 p-4 border border-yellow-500/20 rounded-sm"
              whileHover={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
            >
              <p className="text-xs uppercase tracking-widest text-slate-400 font-headline font-bold mb-1">Warnings</p>
              <p className="text-2xl font-bold text-yellow-400">{stats.warning}</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-red-500/5 to-red-600/5 p-4 border border-red-500/20 rounded-sm"
              whileHover={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
            >
              <p className="text-xs uppercase tracking-widest text-slate-400 font-headline font-bold mb-1">Errors</p>
              <p className="text-2xl font-bold text-red-400">{stats.error}</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 p-4 border border-emerald-500/20 rounded-sm"
              whileHover={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
            >
              <p className="text-xs uppercase tracking-widest text-slate-400 font-headline font-bold mb-1">Success</p>
              <p className="text-2xl font-bold text-emerald-400">{stats.success}</p>
            </motion.div>
          </motion.div>

          {/* Logs List */}
          <motion.div 
            className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* List Header */}
            <div className="px-6 py-4 bg-slate-900/50 border-b border-slate-800/50 text-xs uppercase tracking-widest font-headline font-bold text-slate-400">
              <div className="flex items-center justify-between">
                <span>Recent Logs</span>
                <span className="text-[10px]">Total: {filtered.length}</span>
              </div>
            </div>

            {/* List Body */}
            <div className="divide-y divide-slate-800/30 max-h-[600px] overflow-y-auto">
              <AnimatePresence>
                {filtered.length > 0 ? (
                  filtered.map((log, index) => (
                    <AnimatedLogRow
                      key={log.id}
                      log={log}
                      index={index}
                      onCopy={(message) => {
                        navigator.clipboard.writeText(message);
                      }}
                    />
                  ))
                ) : (
                  <motion.div
                    className="col-span-12 py-12 px-6 text-center text-slate-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="font-body text-sm">No logs matching your filters</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
