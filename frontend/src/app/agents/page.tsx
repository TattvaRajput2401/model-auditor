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
    <DashboardLayout>
      <div className="animate-slideInTop">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-on-surface mb-2 uppercase">
            Agent Management <span className="text-primary">Hub</span>
          </h1>
          <p className="text-on-surface-variant font-body">
            Monitor and orchestrate your synthetic auditors in real-time.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Registration Form */}
          <div className="col-span-12 lg:col-span-5 bg-surface-container-low p-8 border border-outline-variant/15 rounded-lg">
            <h3 className="text-xl font-headline font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">add_circle</span>
              Register New Agent
            </h3>

            {error && (
              <div className="mb-4 p-4 bg-error/10 border border-error/30 rounded-sm text-error text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-4 bg-tertiary/10 border border-tertiary/30 rounded-sm text-tertiary text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block text-xs font-headline uppercase tracking-widest text-on-surface-variant mb-2">
                  Agent ID
                </label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  placeholder="e.g., agent-001"
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-sm focus:ring-0 focus:border-l-2 focus:border-l-secondary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-headline uppercase tracking-widest text-on-surface-variant mb-2">
                  Agent Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Sentinel-A1"
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-sm focus:ring-0 focus:border-l-2 focus:border-l-secondary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-headline uppercase tracking-widest text-on-surface-variant mb-2">
                  Model Type
                </label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-sm focus:ring-0 focus:border-l-2 focus:border-l-secondary transition-all"
                >
                  <option value="gpt-4">GPT-4</option>
                  <option value="claude">Claude</option>
                  <option value="llama">Llama</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-headline uppercase tracking-widest text-on-surface-variant mb-2">
                  Agent Type
                </label>
                <select
                  name="agent_type"
                  value={formData.agent_type}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-sm focus:ring-0 focus:border-l-2 focus:border-l-secondary transition-all"
                >
                  <option value="language">Language</option>
                  <option value="vision">Vision</option>
                  <option value="multimodal">Multimodal</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isRegistering}
                className="w-full py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-sm rounded-sm hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">{isRegistering ? 'loading' : 'rocket_launch'}</span>
                {isRegistering ? 'Registering...' : 'Initialize Agent'}
              </button>
            </form>
          </div>

          {/* Agents List */}
          <div className="col-span-12 lg:col-span-7">
            <h3 className="text-xl font-headline font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">list</span>
              Registered Agents ({agents.length})
            </h3>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <span className="material-symbols-outlined text-6xl text-primary animate-pulse">loading</span>
              </div>
            ) : agents.length > 0 ? (
              <div className="space-y-4">
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    className="bg-surface-container-low p-6 border border-outline-variant/15 rounded-lg hover:bg-surface-container-high transition-all duration-200 transform hover:translate-y-[-2px] group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-secondary">smart_toy</span>
                          </div>
                          <div>
                            <h4 className="font-headline text-lg font-bold text-on-surface uppercase">{agent.name}</h4>
                            <p className="text-xs font-mono text-on-surface-variant">{agent.id}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                          <span className="px-3 py-1 bg-surface-container-lowest border border-secondary/30 text-secondary text-xs font-mono font-bold rounded-sm uppercase">
                            {agent.model}
                          </span>
                          <span className="px-3 py-1 bg-surface-container-lowest border border-primary/30 text-primary text-xs font-mono font-bold rounded-sm uppercase">
                            {agent.agent_type}
                          </span>
                        </div>
                      </div>
                      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-low p-12 border border-outline-variant/15 rounded-lg text-center">
                <span className="material-symbols-outlined  text-6xl text-on-surface-variant/30 mb-4">info</span>
                <p className="text-on-surface-variant font-body">No agents registered yet. Register your first agent to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
