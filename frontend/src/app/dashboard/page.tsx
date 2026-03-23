'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/ui/dashboard-layout';

interface Agent {
  id: string;
  name: string;
  model: string;
  agent_type: string;
  created_at?: string;
}

export default function Dashboard() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [stats, setStats] = useState({
    activeAgents: 0,
    totalLogs: 0,
    activeAlerts: 0,
    systemHealth: 'Optimal',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/agents/?tenant_id=default');
        if (!response.ok) throw new Error('Failed to fetch agents');
        const data = await response.json();
        setAgents(Array.isArray(data) ? data : []);
        setStats((prev) => ({
          ...prev,
          activeAgents: Array.isArray(data) ? data.length : 0,
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setAgents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="animate-slideInTop">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-on-surface mb-2 uppercase">
            Global <span className="text-primary">Intelligence</span>
          </h1>
          <p className="text-on-surface-variant font-body">
            Cross-model audit stream and risk assessment protocol.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface-container-low p-6 border-l-2 border-primary hover:bg-surface-container-high transition-all duration-300 transform hover:translate-y-[-2px]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Active Agents</span>
              <span className="material-symbols-outlined text-primary">monitoring</span>
            </div>
            <div className="text-4xl font-headline font-bold text-on-surface">{stats.activeAgents}</div>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-tertiary">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              0% vs last cycle
            </div>
          </div>

          <div className="bg-surface-container-low p-6 border-l-2 border-error hover:bg-surface-container-high transition-all duration-300 transform hover:translate-y-[-2px]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Violations</span>
              <span className="material-symbols-outlined text-error">gpp_maybe</span>
            </div>
            <div className="text-4xl font-headline font-bold text-on-surface">0</div>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-tertiary">
              <span className="material-symbols-outlined text-xs">check_circle</span>
              No violations
            </div>
          </div>

          <div className="bg-surface-container-low p-6 border-l-2 border-secondary hover:bg-surface-container-high transition-all duration-300 transform hover:translate-y-[-2px]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Avg Latency</span>
              <span className="material-symbols-outlined text-secondary">speed</span>
            </div>
            <div className="text-4xl font-headline font-bold text-on-surface">0ms</div>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-tertiary">
              <span className="material-symbols-outlined text-xs">check_circle</span>
              Waiting for data
            </div>
          </div>

          <div className="bg-surface-container-low p-6 border-l-2 border-outline hover:bg-surface-container-high transition-all duration-300 transform hover:translate-y-[-2px]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Total Runs</span>
              <span className="material-symbols-outlined text-on-surface-variant">database</span>
            </div>
            <div className="text-4xl font-headline font-bold text-on-surface">0</div>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-on-surface-variant">
              LAST 24 HOURS
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Active Agents Section */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/15 p-8 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Active Agents</h3>
                <p className="text-xs font-mono text-on-surface-variant mt-1">Real-time agent status</p>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <span className="material-symbols-outlined text-6xl text-primary animate-pulse">loading</span>
              </div>
            ) : error ? (
              <div className="text-center py-8 text-error">
                <p className="font-body">{error}</p>
              </div>
            ) : agents.length > 0 ? (
              <div className="space-y-3">
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    className="flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high transition-all duration-200 border-l-2 border-primary"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                      </div>
                      <div>
                        <p className="font-headline text-sm font-bold text-on-surface uppercase">{agent.name}</p>
                        <p className="text-[10px] font-mono text-on-surface-variant">{agent.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono text-tertiary font-bold">{agent.model}</p>
                      <p className="text-[10px] text-on-surface-variant">{agent.agent_type}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-on-surface-variant">
                <p className="font-body">No agents registered yet</p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-low border border-outline-variant/15 p-8 rounded-lg">
            <h3 className="text-xl font-headline font-bold uppercase tracking-tight mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-3 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">add_circle</span>
                Register Agent
              </button>
              <button className="w-full py-3 bg-surface-container-highest border border-primary/40 text-primary font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary/10 active:scale-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">analytics</span>
                View Analytics
              </button>
              <button className="w-full py-3 bg-surface-container-highest border border-secondary/40 text-secondary font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-secondary/10 active:scale-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">settings</span>
                Configure System
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
