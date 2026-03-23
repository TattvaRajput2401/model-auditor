'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/ui/dashboard-layout';

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
        return 'text-on-error bg-error/10 border-error/30';
      case 'HIGH':
        return 'text-secondary bg-secondary/10 border-secondary/30';
      case 'MEDIUM':
        return 'text-primary bg-primary/10 border-primary/30';
      default:
        return 'text-tertiary bg-tertiary/10 border-tertiary/30';
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
    <DashboardLayout>
      <div className="animate-slideInTop">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-on-surface mb-2 uppercase">
              Security <span className="text-primary">Pulse</span>
            </h1>
            <p className="text-on-surface-variant font-body">Real-time monitoring of policy violations</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-4 bg-error-container text-on-surface font-headline font-bold uppercase tracking-tighter flex items-center gap-2 hover:brightness-125 transition-all active:scale-95 border-b-2 border-on-error rounded-sm">
              <span className="material-symbols-outlined">dangerous</span>
              Emergency Shutdown
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-surface-container-low p-6 border-l-2 border-error rounded-sm">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">Critical Alerts</p>
            <p className="text-3xl font-bold text-error mt-2">{stats.critical}</p>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-primary rounded-sm">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">Active Alerts</p>
            <p className="text-3xl font-bold text-primary mt-2">{stats.active}</p>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-tertiary rounded-sm">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">Total Alerts</p>
            <p className="text-3xl font-bold text-tertiary mt-2">{stats.total}</p>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-8 flex gap-4">
          {(['all', 'active', 'resolved'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 font-headline text-xs uppercase tracking-widest rounded-sm transition-all ${
                filterStatus === status
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-highest text-on-surface-variant hover:text-primary'
              }`}
            >
              {status === 'all' ? 'All Alerts' : status === 'active' ? 'Active' : 'Resolved'}
            </button>
          ))}
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filtered.length > 0 ? (
            filtered.map((alert) => (
              <div
                key={alert.id}
                className={`bg-surface-container-low p-6 border-l-4 hover:bg-surface-container-high transition-all duration-200 cursor-pointer group ${
                  alert.severity === 'CRITICAL'
                    ? 'border-error'
                    : alert.severity === 'HIGH'
                      ? 'border-secondary'
                      : alert.severity === 'MEDIUM'
                        ? 'border-primary'
                        : 'border-tertiary'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 font-bold text-xs border rounded-sm ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs font-mono text-on-surface-variant">{new Date(alert.timestamp).toLocaleString()}</span>
                    </div>
                    <h3 className="text-lg font-headline font-bold text-on-surface uppercase mb-2">{alert.title}</h3>
                    <p className="text-sm text-on-surface-variant mb-3">{alert.message}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-surface-container-lowest border border-outline-variant/30 rounded-sm">
                        Node: {alert.node}
                      </span>
                      {alert.status === 'active' && (
                        <button
                          onClick={() => handleResolve(alert.id)}
                          className="px-2 py-1 bg-tertiary/10 border border-tertiary/30 text-tertiary hover:bg-tertiary/20 transition-all rounded-sm font-bold"
                        >
                          Mark Resolved
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="ml-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-surface-container-highest rounded-sm">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-highest rounded-sm">
                      <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-surface-container-low p-12 border border-outline-variant/15 rounded-lg text-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4">check_circle</span>
              <p className="text-on-surface-variant font-body">No {filterStatus === 'all' ? '' : filterStatus} alerts found</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
