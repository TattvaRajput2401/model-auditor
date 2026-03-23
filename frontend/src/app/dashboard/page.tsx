'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DashboardLayout from '@/components/ui/dashboard-layout';
import PageTransition from '@/components/ui/page-transition';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Activity, AlertTriangle, Zap, Database, Monitor, TrendingUp, CheckCircle, Bolt, Shield, Clock, ArrowRight } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  model: string;
  agent_type: string;
  created_at?: string;
}

export default function Dashboard() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [statsData, setStatsData] = useState({
    activeAgents: 0,
    violations: 0,
    avgLatency: 0,
    totalRuns: 0,
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
        setStatsData((prev) => ({
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

  const metricCards = [
    {
      label: 'Active Agents',
      value: statsData.activeAgents || 0,
      icon: Activity,
      trend: '',
      subtext: 'monitoring',
      borderColor: 'border-cyan-400',
      accentColor: 'text-cyan-400',
    },
    {
      label: 'Violations',
      value: statsData.violations || 0,
      icon: AlertTriangle,
      trend: '',
      subtext: 'detected',
      borderColor: 'border-red-400',
      accentColor: 'text-red-400',
    },
    {
      label: 'Avg Latency',
      value: '0ms',
      icon: Zap,
      trend: '',
      subtext: 'latency',
      borderColor: 'border-purple-400',
      accentColor: 'text-purple-400',
    },
    {
      label: 'Total Runs',
      value: 0,
      icon: Database,
      trend: '',
      subtext: 'runs',
      borderColor: 'border-slate-600',
      accentColor: 'text-slate-400',
    },
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
                Global <span className="text-cyan-400">Intelligence</span>
              </h1>
              <p className="text-on-surface-variant font-body text-sm">
                Cross-model audit stream and risk assessment protocol.
              </p>
            </div>
            <div className="flex gap-4">
              <motion.div 
                className="bg-slate-900/50 backdrop-blur px-4 py-2 border border-slate-700/50 flex items-center gap-3 rounded-sm"
                whileHover={{ borderColor: 'rgba(143, 245, 255, 0.3)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-mono text-purple-400">REF: SYNC_2204</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              </motion.div>
            </div>
          </motion.header>

          {/* Metric Cards Grid */}
          {loading ? (
            <SkeletonCard count={4} />
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              {metricCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    className={`bg-slate-900/50 p-6 border-l-2 ${card.borderColor} group hover:bg-slate-800/50 transition-all duration-200 backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ translateY: -2 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-headline uppercase tracking-widest text-slate-400">
                        {card.label}
                      </span>
                      <Icon size={20} className={`${card.accentColor} opacity-70 group-hover:opacity-100`} strokeWidth={1.5} />
                    </div>
                    <div className={`text-4xl font-headline font-bold ${card.accentColor} mb-2`}>
                      {card.value}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                      {card.trend && (
                        <>
                          <TrendingUp size={12} />
                          <span>{card.trend}</span>
                        </>
                      )}
                      {card.subtext && (
                        <span className="text-slate-400 ml-auto">{card.subtext}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Main Bento Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Risk Score Trends (8 cols) */}
            <motion.div 
              className="col-span-12 lg:col-span-8 bg-slate-950/50 border border-slate-800/50 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-on-surface">
                    Risk Score Trends
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Protocol: AGENT_BEHAVIOR_ANALYSIS_V4</p>
                </div>
                <div className="flex gap-2">
                  <motion.span 
                    className="px-3 py-1 bg-slate-800/50 text-[10px] font-bold rounded-full border border-slate-700/30 text-slate-400"
                    whileHover={{ borderColor: 'rgba(143, 245, 255, 0.2)' }}
                  >
                    7D
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 bg-cyan-400/10 text-[10px] font-bold rounded-full border border-cyan-400/30 text-cyan-400"
                    whileHover={{ backgroundColor: 'rgba(143, 245, 255, 0.15)' }}
                  >
                    30D
                  </motion.span>
                </div>
              </div>

              {/* Mock Chart Visualization */}
              <div className="h-64 flex items-end gap-2 px-4">
                {[0, 0, 0, 0, 0, 0, 0].map((height, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-1 bg-slate-800/30 relative group hover:bg-slate-800/50 transition-all"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.4 + idx * 0.05, duration: 0.6 }}
                  >
                    <div className="absolute inset-x-0 bottom-0 bg-cyan-400/20"></div>
                    <motion.div 
                      className="absolute inset-x-0 bottom-0 bg-cyan-400 h-[2px]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + idx * 0.05, duration: 0.4 }}
                    ></motion.div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex justify-between px-4 text-[10px] font-mono text-slate-400 uppercase tracking-tighter">
                <span>Oct 24</span>
                <span>Oct 26</span>
                <span>Oct 28</span>
                <span>Oct 30</span>
                <span>Nov 01</span>
                <span>Nov 03</span>
                <span>Nov 05</span>
              </div>
            </motion.div>

            {/* Live Audit Feed (4 cols) */}
            <motion.div 
              className="col-span-12 lg:col-span-4 bg-slate-900/50 border border-slate-800/50 flex flex-col backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="p-6 border-b border-slate-800/50 flex items-center justify-between">
                <h3 className="font-headline font-bold text-sm uppercase tracking-widest">Live Audit Feed</h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">Realtime</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-0">
                {[
                  { icon: Bolt, title: 'GPT-4_PROD_02', msg: 'Prompt injection attempt neutralized', time: '2M AGO', color: 'text-purple-400' },
                  { icon: AlertTriangle, title: 'CLAUDE_OPUS_01', msg: 'Sensitive data leak detected', time: '12M AGO', color: 'text-red-400', bg: 'bg-red-400/5' },
                  { icon: CheckCircle, title: 'MISTRAL_7B_LOCAL', msg: 'Completed full policy check', time: '28M AGO', color: 'text-emerald-400' },
                  { icon: Clock, title: 'SYSTEM_CORE', msg: 'Knowledge base sync initiated', time: '1H AGO', color: 'text-slate-400' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return null; // Hide mock items
                })}
              </div>

              <motion.button 
                className="p-4 text-[10px] font-headline font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 text-center transition-colors border-t border-slate-800/50"
                whileHover={{ backgroundColor: 'rgba(143, 245, 255, 0.05)' }}
              >
                View Full Audit History
              </motion.button>
            </motion.div>
          </div>

          {/* System Health Progress Section */}
          <motion.section 
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[
              { label: 'Model Integrity', value: 0, color: 'bg-cyan-400' },
              { label: 'Data Privacy', value: 0, color: 'bg-purple-400' },
              { label: 'Alignment Quota', value: 0, color: 'bg-emerald-400' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-900/50 p-6 border border-slate-800/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + idx * 0.05 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase">{item.label}</span>
                  <span className="text-xs font-mono text-slate-500">--%</span>
                </div>
                <div className="w-full h-1 bg-slate-800/50 overflow-hidden">
                  <motion.div 
                    className={`h-full ${item.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.section>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
