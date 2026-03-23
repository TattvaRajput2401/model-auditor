'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '@/components/ui/dashboard-layout';
import AnimatedLogRow, { LogEntry } from '@/components/ui/log-row';
import PageTransition from '@/components/ui/page-transition';
import { Search, FileText, AlertCircle } from 'lucide-react';

const mockLogs: LogEntry[] = []; // No mock data - open for dynamic

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

  const stats = [
    { label: 'Info Logs', value: logs.filter((l) => l.level === 'info').length, color: 'border-l-blue-400', textColor: 'text-blue-400' },
    { label: 'Warnings', value: logs.filter((l) => l.level === 'warning').length, color: 'border-l-yellow-400', textColor: 'text-yellow-400' },
    { label: 'Errors', value: logs.filter((l) => l.level === 'error').length, color: 'border-l-red-400', textColor: 'text-red-400' },
    { label: 'Success', value: logs.filter((l) => l.level === 'success').length, color: 'border-l-emerald-400', textColor: 'text-emerald-400' },
  ];

  return (
    <PageTransition>
      <DashboardLayout>
        <div className="pt-8 pb-16 px-6 md:px-0">
          {/* Header Section */}
          <motion.header 
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tight text-on-surface mb-2 uppercase">
                Audit <span className="text-cyan-400">Logs</span>
              </h1>
              <p className="text-on-surface-variant font-body text-sm">
                Real-time event monitoring and comprehensive audit log viewer.
              </p>
            </div>
            <motion.div
              className="bg-slate-900/50 backdrop-blur px-4 py-2 border border-slate-700/50 flex items-center gap-3 rounded-sm"
              whileHover={{ borderColor: 'rgba(143, 245, 255, 0.3)' }}
            >
              <span className="text-xs font-mono text-cyan-400">LIVE</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            </motion.div>
          </motion.header>

          {/* Search & Filter Bar */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search logs by message or source..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-200 px-4 py-3 pl-12 rounded-sm focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all placeholder:text-slate-500 font-mono text-sm"
              />
            </div>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value as typeof filterLevel)}
              className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all font-mono text-sm"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, staggerChildren: 0.1 }}
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                className={`bg-slate-900/50 p-6 ${stat.color} border-l-2 hover:bg-slate-800/50 transition-all duration-200 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.05 }}
                whileHover={{ translateY: -2 }}
              >
                <p className="text-xs uppercase tracking-widest text-slate-400 font-headline mb-3">{stat.label}</p>
                <p className={`text-4xl font-headline font-bold ${stat.textColor}`}>{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Logs Container */}
          <motion.div 
            className="bg-slate-950/50 border border-slate-800/50 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-slate-900/50 border-b border-slate-800/50 flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-widest font-headline font-bold text-slate-300 flex items-center gap-3">
                <FileText size={16} strokeWidth={1.5} />
                Recent Logs
              </h3>
              <span className="text-[10px] font-mono text-slate-400">Total: {filtered.length}</span>
            </div>

            {/* Body */}
            <div className="divide-y divide-slate-800/30 max-h-[600px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {filtered.length > 0 ? (
                  filtered.map((log, index) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <AnimatedLogRow
                        log={log}
                        index={index}
                        onCopy={(message) => {
                          navigator.clipboard.writeText(message);
                        }}
                      />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    className="py-12 px-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AlertCircle size={48} className="text-slate-600 mx-auto mb-4" strokeWidth={1.5} />
                    <p className="font-body text-slate-400 text-sm">
                      {searchTerm || filterLevel !== 'all'
                        ? 'No logs matching your search filters'
                        : 'No logs available yet'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {filtered.length > 0 && (
              <motion.div
                className="px-6 py-3 border-t border-slate-800/50 bg-slate-900/30 text-xs font-mono text-slate-400 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span>Showing {filtered.length} log entries</span>
                <span className="text-[10px] text-slate-500">Last updated: just now</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
