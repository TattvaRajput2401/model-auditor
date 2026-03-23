'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Rocket, Bot, Zap, ChevronRight, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/ui/dashboard-layout';
import PageTransition from '@/components/ui/page-transition';

interface Agent {
  id: string;
  name: string;
  model: string;
  agent_type: string;
  created_at?: string;
}

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    model: 'gpt-4',
    agent_type: 'language',
  });
  const [isRegistering, setIsRegistering] = useState(false);

  const fetchAgents = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/agents/?tenant_id=default');
      if (!response.ok) throw new Error('Failed to fetch agents');
      const data = await response.json();
      setAgents(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch agents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsRegistering(true);

    try {
      const response = await fetch('http://localhost:8000/agents/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Registration failed');
      }

      setSuccess('Agent registered successfully!');
      setFormData({ id: '', name: '', model: 'gpt-4', agent_type: 'language' });
      await fetchAgents();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsRegistering(false);
    }
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
                Agent <span className="text-cyan-400">Management</span>
              </h1>
              <p className="text-on-surface-variant font-body text-sm">
                Monitor and orchestrate your synthetic auditors in real-time.
              </p>
            </div>
            <motion.button
              className="px-6 py-4 bg-slate-800/50 text-cyan-400 font-headline font-bold uppercase tracking-tighter text-sm border border-cyan-400/20 flex items-center gap-3 rounded-sm hover:bg-slate-800/70 transition-all active:scale-95"
              whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', borderColor: 'rgba(34, 197, 94, 0.3)' }}
            >
              <Zap size={18} strokeWidth={2} />
              Monitor Agents
            </motion.button>
          </motion.header>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Registration Form - Left Side */}
            <motion.div
              className="col-span-12 lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-slate-950/50 border border-slate-800/50 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight mb-6 flex items-center gap-3 text-on-surface">
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-400/10 border border-cyan-400/30 rounded-sm">
                    <Plus size={20} strokeWidth={2} className="text-cyan-400" />
                  </div>
                  Register New Agent
                </h3>

                {error && (
                  <motion.div
                    className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-400 text-sm font-body"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-sm text-emerald-400 text-sm font-body"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {success}
                  </motion.div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-headline uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                      Agent ID
                    </label>
                    <input
                      type="text"
                      name="id"
                      value={formData.id}
                      onChange={handleInputChange}
                      placeholder="ID-00001-ALPHA"
                      required
                      className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all font-mono text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-headline uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Sentinel-Alpha"
                      required
                      className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all font-mono text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-headline uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                      Model Type
                    </label>
                    <select
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all font-mono text-sm"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="claude">Claude</option>
                      <option value="llama">Llama</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-headline uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                      Agent Type
                    </label>
                    <select
                      name="agent_type"
                      value={formData.agent_type}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all font-mono text-sm"
                    >
                      <option value="language">Language</option>
                      <option value="vision">Vision</option>
                      <option value="multimodal">Multimodal</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isRegistering}
                    className="w-full py-4 bg-cyan-400 text-on-primary font-headline font-bold uppercase tracking-[0.15em] text-sm rounded-sm hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(143,245,255,0.15)] mt-6"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(143,245,255,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isRegistering ? (
                      <Loader2 size={18} className="animate-spin" strokeWidth={2} />
                    ) : (
                      <Rocket size={18} strokeWidth={2} />
                    )}
                    {isRegistering ? 'Registering...' : 'Initialize Agent'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Agents List - Right Side */}
            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between px-2 mb-6">
                <h2 className="font-headline text-xl uppercase tracking-widest text-on-surface font-bold">
                  Active Agents
                </h2>
                <span className="text-sm font-mono text-slate-400">({agents.length} {agents.length === 1 ? 'agent' : 'agents'})</span>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <Loader2 size={48} className="text-cyan-400 animate-spin" strokeWidth={1.5} />
                </div>
              ) : agents.length > 0 ? (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.08 }}
                >
                  {agents.map((agent, idx) => (
                    <motion.div
                      key={agent.id}
                      className="bg-slate-900/50 p-6 border border-slate-800/50 flex items-start gap-6 hover:bg-slate-800/50 transition-all duration-200 group cursor-pointer hover:border-cyan-400/30 backdrop-blur-sm border-l-4 border-l-cyan-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-12 h-12 rounded-sm bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                        <Bot size={24} strokeWidth={1.5} className="text-cyan-400" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-headline text-sm font-bold text-cyan-400 uppercase tracking-wide">
                              {agent.name}
                            </h4>
                            <p className="text-xs font-mono text-slate-400 mt-1">{agent.id}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-mono text-slate-300 font-bold uppercase">{agent.model}</p>
                            <p className="text-[10px] text-slate-400">{agent.agent_type}</p>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-3">
                          <span className="px-3 py-1 bg-slate-800/30 border border-slate-700/30 text-[10px] font-mono uppercase text-slate-400 rounded-sm">
                            Type: {agent.agent_type}
                          </span>
                          <span className="px-3 py-1 bg-slate-800/30 border border-slate-700/30 text-[10px] font-mono uppercase text-slate-400 rounded-sm">
                            Model: {agent.model}
                          </span>
                        </div>
                      </div>

                      <motion.div
                        className="text-slate-400 group-hover:text-cyan-400 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <ChevronRight size={20} strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="bg-slate-900/30 p-12 border border-slate-800/30 text-center rounded-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={48} className="text-slate-600 mx-auto mb-4" strokeWidth={1.5} />
                  <p className="text-slate-400 font-body text-sm">
                    No agents registered yet. Create your first agent using the form on the left.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
