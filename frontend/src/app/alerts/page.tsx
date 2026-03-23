'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, MoreVertical, Zap, Shield, Info } from 'lucide-react';
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

const mockAlerts: Alert[] = []; // No mock data - open for dynamic

export default function AlertsPage() {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'resolved'>('all');

  const filtered = alerts.filter((alert) => {
    if (filterStatus === 'all') return true;
    return alert.status === filterStatus;
  });

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'CRITICAL':
        return {
          border: 'border-l-red-400',
          iconColor: 'text-red-400',
          bgColor: 'bg-red-400/10',
          borderColor: 'border-red-400/20',
          textColor: 'text-red-400',
        };
      case 'HIGH':
        return {
          border: 'border-l-purple-400',
          iconColor: 'text-purple-400',
          bgColor: 'bg-purple-400/10',
          borderColor: 'border-purple-400/20',
          textColor: 'text-purple-400',
        };
      case 'MEDIUM':
        return {
          border: 'border-l-cyan-400',
          iconColor: 'text-cyan-400',
          bgColor: 'bg-cyan-400/10',
          borderColor: 'border-cyan-400/20',
          textColor: 'text-cyan-400',
        };
      default:
        return {
          border: 'border-l-emerald-400',
          iconColor: 'text-emerald-400',
          bgColor: 'bg-emerald-400/10',
          borderColor: 'border-emerald-400/20',
          textColor: 'text-emerald-400',
        };
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
          {/* Header Section */}
          <motion.header
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tight text-on-surface mb-2 uppercase">
                Security <span className="text-cyan-400">Pulse</span>
              </h1>
              <p className="text-on-surface-variant font-body text-sm">
                Real-time monitoring of policy violations and model integrity. Direct control for emergent failure states.
              </p>
            </div>
            <motion.button
              className="px-6 py-4 bg-red-500/10 text-red-400 font-headline font-bold uppercase tracking-tighter text-sm border border-red-400/30 flex items-center gap-3 rounded-sm hover:bg-red-500/20 transition-all active:scale-95 whitespace-nowrap"
              whileHover={{ scale: 1.02, borderColor: 'rgba(244, 63, 94, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap size={18} strokeWidth={2} />
              Emergency Shutdown
            </motion.button>
          </motion.header>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, staggerChildren: 0.1 }}
          >
            {[
              { label: 'Critical Alerts', value: stats.critical, color: 'border-l-red-400', textColor: 'text-red-400' },
              { label: 'Active Alerts', value: stats.active, color: 'border-l-cyan-400', textColor: 'text-cyan-400' },
              { label: 'Total Alerts', value: stats.total, color: 'border-l-emerald-400', textColor: 'text-emerald-400' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className={`bg-slate-900/50 p-6 ${stat.color} border-l-2 hover:bg-slate-800/50 transition-all duration-200 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                whileHover={{ translateY: -2 }}
              >
                <p className="text-xs uppercase tracking-widest text-slate-400 font-headline mb-3">{stat.label}</p>
                <p className={`text-4xl font-headline font-bold ${stat.textColor}`}>{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            className="mb-8 flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {(['all', 'active', 'resolved'] as const).map((status) => (
              <motion.button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 font-headline text-xs uppercase tracking-[0.1em] rounded-sm transition-all ${
                  filterStatus === status
                    ? 'bg-cyan-400/15 text-cyan-400 border border-cyan-400/40'
                    : 'bg-slate-800/30 text-slate-400 border border-slate-700/30 hover:text-slate-300 hover:border-slate-600/50'
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
              filtered.map((alert, idx) => {
                const styles = getSeverityStyles(alert.severity);
                const IconComponent = alert.severity === 'CRITICAL' ? AlertTriangle : Shield;
                return (
                  <motion.div
                    key={alert.id}
                    className={`bg-slate-900/50 p-6 border ${styles.border} border-l-4 hover:bg-slate-800/50 transition-all duration-200 cursor-pointer group backdrop-blur-sm hover:border-slate-700/50`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + idx * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-sm ${styles.bgColor} border ${styles.borderColor} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent size={24} strokeWidth={1.5} className={styles.iconColor} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-headline text-xs uppercase tracking-widest font-bold ${styles.textColor}`}>
                            {alert.severity} Severity
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">{new Date(alert.timestamp).toLocaleString()}</span>
                        </div>

                        <h3 className="font-headline text-lg text-on-surface group-hover:text-cyan-400 transition-colors font-bold mb-2 uppercase">
                          {alert.title}
                        </h3>

                        <p className="font-body text-sm text-on-surface-variant mb-3 leading-relaxed">
                          {alert.message}
                        </p>

                        <div className="flex gap-2 flex-wrap items-center">
                          <span className="px-3 py-1 bg-slate-900/50 border border-slate-700/30 text-[10px] font-mono uppercase text-slate-400 rounded-sm">
                            Node: {alert.node}
                          </span>

                          {alert.status === 'active' && (
                            <motion.button
                              onClick={() => handleResolve(alert.id)}
                              className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 hover:bg-emerald-400/15 transition-all rounded-sm font-bold text-[10px] uppercase tracking-tight"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Resolve
                            </motion.button>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                          className="p-2 hover:bg-slate-700/50 rounded-sm text-emerald-400"
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
                );
              })
            ) : (
              <motion.div
                className="bg-slate-900/30 p-12 border border-slate-800/30 text-center rounded-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={48} className="text-slate-600 mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-slate-400 font-body text-sm">
                  {filterStatus === 'all'
                    ? 'No alerts found. System is operating normally.'
                    : `No ${filterStatus} alerts found.`}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
