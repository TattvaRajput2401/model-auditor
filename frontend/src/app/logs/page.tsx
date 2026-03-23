'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/ui/dashboard-layout';

interface LogEntry {
  id: string;
  timestamp: string;
  agent: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
  confidence: number;
}

const mockLogs: LogEntry[] = [];

export default function LogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState<'ALL' | 'INFO' | 'WARNING' | 'ERROR'>('ALL');
  const logs = mockLogs;

  const filtered = logs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.agent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'ALL' || log.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'ERROR':
        return 'text-error bg-error/10 border-error/30';
      case 'WARNING':
        return 'text-secondary bg-secondary/10 border-secondary/30';
      default:
        return 'text-tertiary bg-tertiary/10 border-tertiary/30';
    }
  };

  return (
    <DashboardLayout>
      <div className="animate-slideInTop">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-on-surface mb-2 uppercase">
            Audit <span className="text-primary">Logs</span>
          </h1>
          <p className="text-on-surface-variant font-body">Real-time event monitoring and log viewer</p>
        </header>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-sm focus:ring-0 focus:border-l-2 focus:border-l-secondary transition-all"
            />
          </div>
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value as typeof filterLevel)}
            className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-sm focus:ring-0 focus:border-l-2 focus:border-l-secondary transition-all"
          >
            <option value="ALL">All Levels</option>
            <option value="INFO">Info</option>
            <option value="WARNING">Warning</option>
            <option value="ERROR">Error</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-surface-container-low p-4 border-l-2 border-tertiary rounded-sm">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">Info Logs</p>
            <p className="text-2xl font-bold text-tertiary mt-1">{logs.filter((l) => l.level === 'INFO').length}</p>
          </div>
          <div className="bg-surface-container-low p-4 border-l-2 border-secondary rounded-sm">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">Warnings</p>
            <p className="text-2xl font-bold text-secondary mt-1">{logs.filter((l) => l.level === 'WARNING').length}</p>
          </div>
          <div className="bg-surface-container-low p-4 border-l-2 border-error rounded-sm">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">Errors</p>
            <p className="text-2xl font-bold text-error mt-1">{logs.filter((l) => l.level === 'ERROR').length}</p>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low border-b border-outline-variant/10 text-xs uppercase tracking-widest font-headline font-bold text-on-surface-variant">
            <div className="col-span-2">Timestamp</div>
            <div className="col-span-2">Agent</div>
            <div className="col-span-5">Message</div>
            <div className="col-span-2">Level</div>
            <div className="col-span-1 text-right">Conf.</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-outline-variant/10 max-h-screen overflow-y-auto">
            {filtered.length > 0 ? (
              filtered.map((log) => (
                <div
                  key={log.id}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-surface-container transition-colors items-center"
                >
                  <div className="col-span-2 text-xs font-mono text-on-surface-variant">{new Date(log.timestamp).toLocaleTimeString()}</div>
                  <div className="col-span-2 text-xs font-mono text-secondary font-bold">{log.agent}</div>
                  <div className="col-span-5 text-xs text-on-surface truncate">{log.message}</div>
                  <div className={`col-span-2 text-xs font-bold px-2 py-1 border rounded-sm ${getLevelColor(log.level)}`}>
                    {log.level}
                  </div>
                  <div className="col-span-1 text-right text-xs font-mono text-tertiary">{(log.confidence * 100).toFixed(0)}%</div>
                </div>
              ))
            ) : (
              <div className="col-span-12 py-12 text-center text-on-surface-variant">
                <p className="font-body">No logs matching your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
