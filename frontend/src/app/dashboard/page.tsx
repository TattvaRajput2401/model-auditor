'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/ui/dashboard-layout';
import AnimatedStatCard from '@/components/ui/stat-card';
import PageTransition from '@/components/ui/page-transition';
import { SkeletonStats, SkeletonCard } from '@/components/ui/skeleton';
import { Activity, AlertTriangle, Zap, Database } from 'lucide-react';

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
    <PageTransition>
      <DashboardLayout>
        <div className="pt-8 pb-16">
          {/* Header */}
          <motion.header 
            className="mb-12 pl-6 md:pl-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-primary mb-2 uppercase">
              Global <span className="text-cyan-400">Intelligence</span>
            </h1>
            <p className="text-slate-400 font-body text-sm">
              Cross-model audit stream and risk assessment protocol.
            </p>
          </motion.header>

          {/* Stats Grid */}
          {loading ? (
            <SkeletonStats count={4} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-6 md:px-0">
              <AnimatedStatCard
                label="Active Agents"
                value={stats.activeAgents}
                icon={<Activity size={20} strokeWidth={1.5} />}
                trend={stats.activeAgents > 0 ? 25 : 0}
                subtext={`${stats.activeAgents} monitoring`}
                color="cyan"
                index={0}
              />
              <AnimatedStatCard
                label="Violations"
                value={0}
                icon={<AlertTriangle size={20} strokeWidth={1.5} />}
                trend={0}
                subtext="No violations detected"
                color="emerald"
                index={1}
              />
              <AnimatedStatCard
                label="Avg Latency"
                value="0ms"
                icon={<Zap size={20} strokeWidth={1.5} />}
                subtext="Waiting for data"
                color="amber"
                index={2}
              />
              <AnimatedStatCard
                label="Total Runs"
                value={0}
                icon={<Database size={20} strokeWidth={1.5} />}
                subtext="Last 24 hours"
                color="blue"
                index={3}
              />
            </div>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-6 px-6 md:px-0">
            {/* Active Agents Section */}
            <motion.div 
              className="col-span-12 lg:col-span-8 bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800/50 p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-primary">Active Agents</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Real-time agent status</p>
                </div>
              </div>

              {loading ? (
                <SkeletonCard count={3} />
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-red-400 font-body text-sm">{error}</p>
                </div>
              ) : agents.length > 0 ? (
                <div className="space-y-3">
                  {agents.map((agent, idx) => (
                    <motion.div
                      key={agent.id}
                      className="flex items-center justify-between p-4 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-200 border-l-2 border-primary rounded-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                          <Activity size={16} strokeWidth={1.5} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-headline text-sm font-bold text-cyan-400 uppercase">{agent.name}</p>
                          <p className="text-[10px] font-mono text-slate-400">{agent.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-mono text-slate-300 font-bold">{agent.model}</p>
                        <p className="text-[10px] text-slate-400">{agent.agent_type}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400">
                  <p className="font-body text-sm">No agents registered yet</p>
                </div>
              )}
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="col-span-12 lg:col-span-4 bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800/50 p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-primary mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <motion.button 
                  className="w-full py-3 bg-cyan-400 text-black font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,240,255,0.4)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>+ Register Agent</span>
                </motion.button>
                <motion.button 
                  className="w-full py-3 bg-slate-800/30 border border-slate-700/50 text-slate-300 font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:border-cyan-400/50 hover:text-cyan-400 active:scale-95 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>📊 View Analytics</span>
                </motion.button>
                <motion.button 
                  className="w-full py-3 bg-slate-800/30 border border-slate-700/50 text-slate-300 font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:border-cyan-400/50 hover:text-cyan-400 active:scale-95 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>⚙️ Configure System</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
