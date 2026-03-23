'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Rocket, List, Bot, Info, Loader2, MoreVertical } from 'lucide-react';
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
          {/* Header */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-primary mb-2 uppercase">
              Agent Management <span className="text-cyan-400">Hub</span>
            </h1>
            <p className="text-slate-400 font-body text-sm">
              Monitor and orchestrate your synthetic auditors in real-time.
            </p>
          </motion.header>

          <div className="grid grid-cols-12 gap-8">
            {/* Registration Form */}
            <motion.div
              className="col-span-12 lg:col-span-5 bg-slate-900/50 p-8 border border-slate-800/50 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight mb-6 flex items-center gap-3 text-cyan-400">
                <Plus size={24} strokeWidth={1.5} />
                Register New Agent
              </h3>

              {error && (
                <motion.div
                  className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}

              {success && (
                <motion.div
                  className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-sm text-emerald-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {success}
                </motion.div>
              )}

              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-xs font-headline uppercase tracking-widest text-slate-400 mb-2">
                    Agent ID
                  </label>
                  <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                    placeholder="e.g., agent-001"
                    required
                    className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-0 focus:border-cyan-400/50 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-headline uppercase tracking-widest text-slate-400 mb-2">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Sentinel-A1"
                    required
                    className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-0 focus:border-cyan-400/50 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-headline uppercase tracking-widest text-slate-400 mb-2">
                    Model Type
                  </label>
                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-0 focus:border-cyan-400/50 outline-none transition-all"
                  >
                    <option value="gpt-4">GPT-4</option>
                    <option value="claude">Claude</option>
                    <option value="llama">Llama</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-headline uppercase tracking-widest text-slate-400 mb-2">
                    Agent Type
                  </label>
                  <select
                    name="agent_type"
                    value={formData.agent_type}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-sm focus:ring-0 focus:border-cyan-400/50 outline-none transition-all"
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
                  className="w-full py-4 bg-cyan-400 text-black font-headline font-bold uppercase tracking-widest text-sm rounded-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isRegistering ? (
                    <Loader2 size={20} className="animate-spin" strokeWidth={1.5} />
                  ) : (
                    <Rocket size={20} strokeWidth={1.5} />
                  )}
                  {isRegistering ? 'Registering...' : 'Initialize Agent'}
                </motion.button>
              </form>
            </motion.div>

            {/* Agents List */}
            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight mb-6 flex items-center gap-3 text-slate-300">
                <List size={24} strokeWidth={1.5} />
                Registered Agents ({agents.length})
              </h3>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 size={60} className="text-cyan-400 animate-spin" strokeWidth={1.5} />
                </div>
              ) : agents.length > 0 ? (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {agents.map((agent) => (
                    <motion.div
                      key={agent.id}
                      className="bg-slate-900/50 p-6 border border-slate-800/50 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-sm bg-cyan-500/10 flex items-center justify-center">
                              <Bot size={20} strokeWidth={1.5} className="text-cyan-400" />
                            </div>
                            <div>
                              <h4 className="font-headline text-lg font-bold text-slate-100 uppercase">{agent.name}</h4>
                              <p className="text-xs font-mono text-slate-400">{agent.id}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-3">
                            <span className="px-3 py-1 bg-slate-800/30 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold rounded-sm uppercase">
                              {agent.model}
                            </span>
                            <span className="px-3 py-1 bg-slate-800/30 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-bold rounded-sm uppercase">
                              {agent.agent_type}
                            </span>
                          </div>
                        </div>
                        <motion.button
                          className="p-2 text-slate-400 hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MoreVertical size={18} strokeWidth={1.5} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="bg-slate-900/30 p-12 border border-slate-700/30 rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Info size={60} className="text-slate-600 mx-auto mb-4" strokeWidth={1.5} />
                  <p className="text-slate-400 font-body text-sm">No agents registered yet. Register your first agent to get started.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
