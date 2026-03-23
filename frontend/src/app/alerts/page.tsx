'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, MoreVertical } from 'lucide-react';
import DashboardLayout from '@/components/ui/dashboard-layout';
import PageTransition from '@/components/ui/page-transition';

interface Alert {
  id: string;
  title: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  timestamp: string;
  message: string;
  status: 'active' | 'resolved';
  node: string;
}

const mockAlerts: Alert[] = [];

export default function AlertsPage() {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'resolved'>('all');

  const filtered = alerts.filter((alert) => {
    if (filterStatus === 'all') return true;
    return alert.status === filterStatus;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      case 'HIGH':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      case 'MEDIUM':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      default:
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    }
  };

  const handleResolve = (id: string) => {
    setAlerts(alerts.map((a) => (a.id === id ? { ...a, status: 'resolved' } : a)));
  };

  const stats = {
    total: alerts.length,
    active: alerts.filter((a) => a.status === 'active').length,
    critical: alerts.filter((a) => a.severity === 'CRITICAL').length,
  };

  return (
    <PageTransition>
      <DashboardLayout>
        <div className="pt-8 pb-16 px-6 md:px-0">
          {/* Header */}
          <motion.header
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-5xl font-headline font-bold tracking-tighter text-primary mb-2 uppercase">
                Security <span className="text-cyan-400">Pulse</span>
              </h1>
              <p className="text-slate-400 font-body text-sm">Real-time monitoring of policy violations</p>
            </div>
            <div className="flex gap-4">
              <motion.button
                className="px-6 py-4 bg-red-500/10 text-red-400 font-headline font-bold uppercase tracking-tighter flex items-center gap-2 hover:bg-red-500/20 transition-all active:scale-95 border border-red-500/30 rounded-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AlertTriangle size={20} strokeWidth={1.5} />
                Emergency Shutdown
              </motion.button>
            </div>
          </motion.header>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="bg-slate-900/50 p-6 border-l-2 border-red-500/50 rounded-sm">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-headline">Critical Alerts</p>
              <p className="text-3xl font-bold text-red-400 mt-2">{stats.critical}</p>
            </div>
            <div className="bg-slate-900/50 p-6 border-l-2 border-cyan-400/50 rounded-sm">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-headline">Active Alerts</p>
              <p className="text-3xl font-bold text-cyan-400 mt-2">{stats.active}</p>
            </div>
            <div className="bg-slate-900/50 p-6 border-l-2 border-emerald-400/50 rounded-sm">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-headline">Total Alerts</p>
              <p className="text-3xl font-bold text-emerald-400 mt-2">{stats.total}</p>
            </div>
          </motion.div>

          {/* Filter */}
          <motion.div
            className="mb-8 flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {(['all', 'active', 'resolved'] as const).map((status) => (
              <motion.button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 font-headline text-xs uppercase tracking-widest rounded-sm transition-all ${
                  filterStatus === status
                    ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                    : 'bg-slate-800/30 text-slate-400 hover:text-slate-300 border border-transparent hover:border-slate-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'all' ? 'All Alerts' : status === 'active' ? 'Active' : 'Resolved'}
              </motion.button>
            ))}
          </motion.div>

          {/* Alerts List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {filtered.length > 0 ? (
              filtered.map((alert) => (
                <motion.div
                  key={alert.id}
                  className={`bg-slate-900/50 p-6 border-l-4 hover:bg-slate-800/50 transition-all duration-200 cursor-pointer group ${
                    alert.severity === 'CRITICAL'
                      ? 'border-red-500/50'
                      : alert.severity === 'HIGH'
                        ? 'border-purple-500/50'
                        : alert.severity === 'MEDIUM'
                          ? 'border-cyan-400/50'
                          : 'border-emerald-500/50'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 font-bold text-xs border rounded-sm ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{new Date(alert.timestamp).toLocaleString()}</span>
                      </div>
                      <h3 className="text-lg font-headline font-bold text-slate-100 uppercase mb-2">{alert.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">{alert.message}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-sm">
                          Node: {alert.node}
                        </span>
                        {alert.status === 'active' && (
                          <motion.button
                            onClick={() => handleResolve(alert.id)}
                            className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all rounded-sm font-bold text-xs uppercase tracking-widest"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Mark Resolved
                          </motion.button>
                        )}
                      </div>
                    </div>
                    <div className="ml-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        className="p-2 hover:bg-slate-700/50 rounded-sm text-cyan-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CheckCircle size={18} strokeWidth={1.5} />
                      </motion.button>
                      <motion.button
                        className="p-2 hover:bg-slate-700/50 rounded-sm text-slate-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MoreVertical size={18} strokeWidth={1.5} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="bg-slate-900/30 p-12 border border-slate-700/30 rounded-lg text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={60} className="text-slate-600 mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-slate-400 font-body text-sm">No {filterStatus === 'all' ? '' : filterStatus} alerts found</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
