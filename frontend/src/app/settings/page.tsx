'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Wifi, Webhook, Copy, Upload as UploadIcon } from 'lucide-react';
import DashboardLayout from '@/components/ui/dashboard-layout';
import PageTransition from '@/components/ui/page-transition';

type SettingsTab = 'general' | 'users' | 'network' | 'webhooks';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const SettingCard = ({ title, description, icon: Icon, children }: any) => (
  <motion.div
    className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800/50 p-8 rounded-lg backdrop-blur-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center gap-4 mb-6">
      <motion.div
        className="text-cyan-400"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Icon size={28} strokeWidth={1.5} />
      </motion.div>
      <div>
        <h3 className="text-lg font-headline font-bold text-cyan-400 uppercase tracking-tight">{title}</h3>
        {description && <p className="text-xs text-slate-400 mt-1">{description}</p>}
      </div>
    </div>
    {children}
  </motion.div>
);

const TabButton = ({ id, label, icon: Icon, active, onClick }: any) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 font-headline text-xs uppercase tracking-widest transition-all rounded-sm ${
      active
        ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
        : 'text-slate-400 hover:text-slate-300 border border-transparent hover:border-slate-700/50'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon size={18} strokeWidth={1.5} />
    {label}
  </motion.button>
);

const ToggleSwitch = ({ enabled, onChange }: any) => (
  <motion.button
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
      enabled ? 'bg-cyan-400/20 border border-cyan-400/50' : 'bg-slate-700/30 border border-slate-600/50'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className={`inline-block h-4 w-4 transform rounded-full transition-colors ${
        enabled ? 'bg-cyan-400' : 'bg-slate-500'
      }`}
      animate={{ x: enabled ? 20 : 2 }}
    />
  </motion.button>
);

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');
  const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);
  const [quarantineEnabled, setQuarantineEnabled] = useState(false);
  const [confidenceThreshold, setConfidenceThreshold] = useState(0.85);
  const [auditVelocity, setAuditVelocity] = useState(1000);

  return (
    <PageTransition>
      <DashboardLayout>
        <div className="pt-8 pb-16 px-6 md:px-0">
          {/* Page Header */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-primary mb-2 uppercase">
              System <span className="text-cyan-400">Settings</span>
            </h1>
            <p className="text-slate-400 font-body text-sm">Control core operational parameters of the audit node</p>
          </motion.header>

          {/* Tab Navigation */}
          <motion.div
            className="mb-8 flex gap-3 border-b border-slate-800/50 pb-4 overflow-x-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TabButton
              id="general"
              label="General"
              icon={Settings}
              active={activeTab === 'general'}
              onClick={() => setActiveTab('general')}
            />
            <TabButton
              id="users"
              label="Users"
              icon={Users}
              active={activeTab === 'users'}
              onClick={() => setActiveTab('users')}
            />
            <TabButton
              id="network"
              label="Network"
              icon={Wifi}
              active={activeTab === 'network'}
              onClick={() => setActiveTab('network')}
            />
            <TabButton
              id="webhooks"
              label="Webhooks"
              icon={Webhook}
              active={activeTab === 'webhooks'}
              onClick={() => setActiveTab('webhooks')}
            />
          </motion.div>
          {/* GENERAL SETTINGS */}
          {activeTab === 'general' && (
            <motion.div className="space-y-8" variants={containerVariants} initial="initial" animate="animate">
              {/* Platform Identity */}
              <SettingCard title="Platform Identity" icon={Settings}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 block">
                      System Display Name
                    </label>
                    <input
                      type="text"
                      placeholder="Model Auditor"
                      className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-2 rounded-sm focus:border-cyan-400/50 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 block">
                      Operational Node ID
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value="node_audit_001_xyz"
                        className="flex-1 bg-slate-800/30 border border-slate-700/50 text-cyan-400 px-4 py-2 rounded-sm font-mono text-xs opacity-75 focus:outline-none"
                      />
                      <motion.button
                        className="px-3 bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-cyan-400 rounded-sm transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Copy size={16} strokeWidth={1.5} />
                      </motion.button>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 block">
                      Primary Audit Region
                    </label>
                    <select className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-2 rounded-sm focus:border-cyan-400/50 outline-none text-sm">
                      <option>US-EAST-OBSERVATORY</option>
                      <option>EU-WEST-SYNTHETIC</option>
                      <option>ASIA-PAC-KINETIC</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 block">
                      API Endpoint
                    </label>
                    <input
                      type="text"
                      placeholder="https://api.example.com"
                      className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-2 rounded-sm focus:border-cyan-400/50 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <motion.div
                  className="border-2 border-dashed border-slate-700/50 p-8 rounded-lg text-center hover:border-cyan-400/50 transition-colors cursor-pointer group"
                  whileHover={{ borderColor: 'rgba(0, 240, 255, 0.5)' }}
                >
                  <UploadIcon size={40} className="text-slate-600 group-hover:text-cyan-400 transition-colors mx-auto mb-3" strokeWidth={1.5} />
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Upload System Logo</p>
                  <p className="text-[10px] text-slate-500 uppercase">SVG or PNG (Max 5MB)</p>
                </motion.div>
              </SettingCard>

              {/* Maintenance Window */}
              <SettingCard title="Maintenance" icon={Settings} description="Schedule system maintenance windows">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      Enable Maintenance Mode
                    </label>
                    <ToggleSwitch enabled={maintenanceEnabled} onChange={setMaintenanceEnabled} />
                  </div>

                  {maintenanceEnabled && (
                    <motion.div
                      className="space-y-4 p-4 bg-slate-800/30 border border-slate-700/30 rounded-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Recurrence</p>
                        <div className="grid grid-cols-7 gap-2">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                            <motion.button
                              key={day}
                              className={`py-2 rounded-sm text-[10px] font-bold uppercase transition-all ${
                                idx === 0
                                  ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                                  : 'bg-slate-700/30 text-slate-400 border border-slate-600/30 hover:border-slate-500/50'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {day}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                          Start Time (UTC)
                        </label>
                        <input
                          type="time"
                          defaultValue="00:00"
                          className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-2 rounded-sm focus:border-cyan-400/50 outline-none font-mono text-sm"
                        />
                      </div>

                      <div className="p-3 bg-cyan-400/5 border border-cyan-400/20 rounded-sm">
                        <p className="text-[10px] text-cyan-300 font-medium uppercase leading-relaxed">
                          System updates will run during this window. Auditor enters standby mode.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </SettingCard>

              {/* Audit Parameters */}
              <SettingCard title="Audit Parameters" icon={Settings} description="Configure audit execution behavior">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                        Confidence Threshold
                      </label>
                      <span className="text-sm font-mono text-cyan-400 font-bold">{confidenceThreshold.toFixed(2)}</span>
                    </div>
                    <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute h-full bg-gradient-to-r from-cyan-400 to-cyan-300"
                        initial={{ width: 0 }}
                        animate={{ width: `${confidenceThreshold * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={confidenceThreshold}
                        onChange={(e) => setConfidenceThreshold(parseFloat(e.target.value))}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase leading-tight">
                      Models below threshold trigger audit logging immediately.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block">
                      Audit Velocity Limit
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={auditVelocity}
                        onChange={(e) => setAuditVelocity(parseInt(e.target.value) || 0)}
                        className="w-full bg-slate-800/30 border border-slate-700/50 text-slate-200 px-4 py-2 rounded-sm focus:border-cyan-400/50 outline-none font-mono text-sm"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase text-slate-500 font-bold">
                        Req/Sec
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase leading-tight">
                      Maximum auditing speed per node instance.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/50">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      Automatic Quarantine on Drift
                    </label>
                    <ToggleSwitch enabled={quarantineEnabled} onChange={setQuarantineEnabled} />
                  </div>
                  <p className="text-[10px] text-slate-500 uppercase mt-2 leading-tight">
                    Restrict model traffic immediately upon adversarial drift detection.
                  </p>
                </div>
              </SettingCard>
            </motion.div>
          )}

          {/* USERS SETTINGS */}
          {activeTab === 'users' && (
            <motion.div className="space-y-8" variants={containerVariants} initial="initial" animate="animate">
              <SettingCard title="User Management" icon={Users} description="Manage system access and permissions">
                <div className="space-y-4">
                  <motion.button
                    className="w-full py-3 bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    + Add New User
                  </motion.button>
                  <div className="text-center py-12 text-slate-500">
                    <Users size={48} className="mx-auto mb-3 opacity-30" strokeWidth={1.5} />
                    <p className="text-sm">No users registered yet</p>
                  </div>
                </div>
              </SettingCard>
            </motion.div>
          )}

          {/* NETWORK SETTINGS */}
          {activeTab === 'network' && (
            <motion.div className="space-y-8" variants={containerVariants} initial="initial" animate="animate">
              <SettingCard title="Network Configuration" icon={Wifi} description="Configure network and connectivity">
                <div className="space-y-4 text-center py-12">
                  <Wifi size={48} className="mx-auto mb-3 text-slate-600" strokeWidth={1.5} />
                  <p className="text-slate-400 text-sm">Network settings coming soon</p>
                </div>
              </SettingCard>
            </motion.div>
          )}

          {/* WEBHOOKS SETTINGS */}
          {activeTab === 'webhooks' && (
            <motion.div className="space-y-8" variants={containerVariants} initial="initial" animate="animate">
              <SettingCard title="Global Webhooks" icon={Webhook} description="Configure webhook integrations">
                <div className="space-y-4">
                  <motion.button
                    className="w-full py-3 bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    + Add Webhook
                  </motion.button>
                  <div className="text-center py-12 text-slate-500">
                    <Webhook size={48} className="mx-auto mb-3 opacity-30" strokeWidth={1.5} />
                    <p className="text-sm">No webhooks configured</p>
                  </div>
                </div>
              </SettingCard>
            </motion.div>
          )}
        </div>
      </DashboardLayout>
    </PageTransition>
  );
}
