'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/ui/dashboard-layout';

type SettingsTab = 'general' | 'users' | 'network' | 'webhooks';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');
  const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);
  const [quarantineEnabled, setQuarantineEnabled] = useState(false);
  const [confidenceThreshold, setConfidenceThreshold] = useState(0);
  const [auditVelocity, setAuditVelocity] = useState(0);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0e0e0e]">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-white mb-2 uppercase">
            Settings
          </h1>
          <p className="text-[#adaaaa] text-lg">
            Control the core operational parameters of the audit node
          </p>
        </div>

        {/* Settings Navigation Tabs */}
        <div className="mb-8 flex gap-4 border-b border-[#494847] overflow-x-auto pb-4">
          {[
            { id: 'general', label: 'General', icon: 'tune' },
            { id: 'users', label: 'User Management', icon: 'group' },
            { id: 'network', label: 'Network Config', icon: 'lan' },
            { id: 'webhooks', label: 'Global Webhooks', icon: 'webhook' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SettingsTab)}
              className={`flex items-center gap-2 px-6 py-3 font-headline text-sm uppercase tracking-widest whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'text-[#8ff5ff] border-b-2 border-[#8ff5ff] bg-[#8ff5ff]/5'
                  : 'text-[#adaaaa] hover:text-white border-b-2 border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        {/* GENERAL SETTINGS TAB */}
        {activeTab === 'general' && (
          <div className="space-y-8">
            {/* Platform Identity Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 glass-panel p-8 rounded-lg neon-glow">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-[#8ff5ff] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    fingerprint
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-[#8ff5ff] uppercase tracking-tight">
                    Platform Identity
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                      System Display Name
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm focus:border-[#bf81ff] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                      Operational Node ID
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        readOnly
                        value=""
                        className="flex-1 bg-[#000000] border border-[#494847] text-[#bf81ff] px-4 py-3 rounded-sm font-mono text-xs opacity-80 focus:outline-none"
                      />
                      <button className="bg-[#262626] px-4 border border-l-0 border-[#494847] hover:bg-[#1a1919] transition-colors">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                      Primary Audit Region
                    </label>
                    <select className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm focus:border-[#bf81ff] outline-none transition-colors">
                      <option>US-EAST-OBSERVATORY</option>
                      <option>EU-WEST-SYNTHETIC</option>
                      <option>ASIA-PAC-KINETIC</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                      API Endpoint
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm focus:border-[#bf81ff] outline-none transition-colors"
                      placeholder="https://api.example.com"
                    />
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="mt-8 flex flex-col items-center justify-center border-2 border-dashed border-[#494847] p-8 group hover:border-[#8ff5ff] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-[#494847] group-hover:text-[#8ff5ff] transition-colors mb-4">
                    upload_file
                  </span>
                  <p className="text-xs text-center text-white font-bold uppercase tracking-widest">
                    Upload System Logo
                  </p>
                  <p className="text-[10px] text-[#494847] mt-1 uppercase">SVG or PNG (Max 5MB)</p>
                </div>
              </div>

              {/* Maintenance Window */}
              <div className="bg-[#131313] border-l-2 border-[#bf81ff] p-8">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-[#bf81ff] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    event_repeat
                  </span>
                  <h3 className="font-headline text-xl font-bold text-[#bf81ff] uppercase tracking-tight">
                    Maintenance
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                        Scheduled Downtime
                      </label>
                      <button
                        onClick={() => setMaintenanceEnabled(!maintenanceEnabled)}
                        className={`w-10 h-5 rounded-full relative transition-colors ${
                          maintenanceEnabled ? 'bg-[#bf81ff]' : 'bg-[#262626]'
                        }`}
                      >
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${maintenanceEnabled ? 'right-1' : 'left-1'}`}></div>
                      </button>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] text-[#494847] uppercase font-medium">Recurrence</p>
                      <div className="grid grid-cols-4 gap-2">
                        <button className="bg-[#bf81ff] text-[#32005c] text-[10px] font-bold py-2 uppercase transition-all hover:brightness-110">
                          Sun
                        </button>
                        {['Mon', 'Tue', 'Wed'].map((day) => (
                          <button
                            key={day}
                            className="bg-[#262626] text-[#adaaaa] text-[10px] font-bold py-2 uppercase hover:bg-[#1a1919] transition-colors"
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] text-[#494847] uppercase font-medium">Window Start (UTC)</p>
                      <input
                        type="time"
                        defaultValue="00:00"
                        className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-2 rounded-sm font-mono focus:border-[#bf81ff] outline-none transition-colors"
                      />
                    </div>

                    <div className="p-4 bg-[#bf81ff]/5 border border-[#bf81ff]/20">
                      <p className="text-[11px] text-[#bf81ff] font-medium leading-relaxed uppercase italic">
                        System updates and database indexing will trigger during this window. Auditor will enter stand-by mode.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Audit Parameters */}
            <section className="glass-panel p-8 rounded-lg neon-glow">
              <div className="flex items-center gap-4 mb-10">
                <span className="material-symbols-outlined text-[#afffd1] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  analytics
                </span>
                <h3 className="font-headline text-2xl font-bold text-[#afffd1] uppercase tracking-tight">
                  Audit Parameters
                </h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#afffd1]/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Confidence Threshold */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                      Default Confidence Threshold
                    </label>
                    <span className="font-mono text-[#afffd1] text-xl font-bold">{confidenceThreshold.toFixed(2)}</span>
                  </div>
                  <div className="relative h-2 bg-[#131313] rounded-full cursor-pointer">
                    <div
                      className="absolute h-full bg-gradient-to-r from-[#8ff5ff] to-[#afffd1] rounded-full"
                      style={{ width: `${confidenceThreshold * 100}%` }}
                    ></div>
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
                  <p className="text-[10px] text-[#adaaaa] uppercase leading-tight">
                    Models falling below this threshold will trigger immediate audit logging.
                  </p>
                </div>

                {/* Automatic Quarantine */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                      Automatic Quarantine
                    </label>
                    <button
                      onClick={() => setQuarantineEnabled(!quarantineEnabled)}
                      className={`w-12 h-6 rounded-full relative transition-colors border ${
                        quarantineEnabled
                          ? 'bg-[#afffd1]/20 border-[#afffd1]/40'
                          : 'bg-[#262626]/20 border-[#262626]/40'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
                          quarantineEnabled
                            ? 'left-6 bg-[#afffd1]'
                            : 'left-1 bg-[#262626]'
                        }`}
                      ></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#000000] border border-[#494847]/30">
                    <span className="text-[10px] uppercase font-bold text-[#adaaaa]">Quarantine Level</span>
                    <span className="text-[#afffd1] text-[10px] font-bold uppercase tracking-widest">
                      Hard Lockdown
                    </span>
                  </div>
                  <p className="text-[10px] text-[#adaaaa] uppercase leading-tight">
                    Restrict model traffic immediately upon discovery of adversarial drift.
                  </p>
                </div>

                {/* Audit Velocity Limit */}
                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                    Audit Velocity Limit
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={auditVelocity}
                      onChange={(e) => setAuditVelocity(parseInt(e.target.value))}
                      className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm font-mono focus:border-[#bf81ff] outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase text-[#494847] font-bold">
                      Req/Sec
                    </span>
                  </div>
                  <p className="text-[10px] text-[#adaaaa] uppercase leading-tight">
                    Peak auditing speed per node. Exceeding this will queue log entries.
                  </p>
                </div>
              </div>
            </section>

            {/* Regional Settings */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#131313] p-6 border-t border-[#494847]/20">
                <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold block mb-4">
                  Timezone Selection
                </label>
                <select className="w-full bg-transparent border-0 border-b border-[#494847] text-white px-0 py-2 rounded-none focus:outline-none text-sm font-medium">
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>EDT (Eastern Daylight Time)</option>
                  <option>PDT (Pacific Daylight Time)</option>
                </select>
              </div>
              <div className="bg-[#131313] p-6 border-t border-[#494847]/20">
                <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold block mb-4">
                  Language (System Default)
                </label>
                <select className="w-full bg-transparent border-0 border-b border-[#494847] text-white px-0 py-2 rounded-none focus:outline-none text-sm font-medium">
                  <option>EN-US (Observatory English)</option>
                  <option>DE-CH (Synthetic High German)</option>
                  <option>JP-TK (Neo-Tokyo Japanese)</option>
                </select>
              </div>
              <div className="bg-[#131313] p-6 border-t border-[#494847]/20">
                <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold block mb-4">
                  Date Formatting
                </label>
                <div className="flex gap-4">
                  <button className="flex-1 py-2 border border-[#8ff5ff] text-[#8ff5ff] text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                    YYYY-MM-DD
                  </button>
                  <button className="flex-1 py-2 border border-[#494847] text-[#494847] text-[10px] font-bold uppercase tracking-widest hover:border-white transition-colors">
                    DD/MM/YYYY
                  </button>
                </div>
              </div>
            </section>

            {/* Footer Actions */}
            <div className="mt-16 pt-8 border-t border-[#494847]/20 flex justify-end gap-6">
              <button className="px-8 py-3 text-[#adaaaa] font-headline font-bold uppercase tracking-tighter hover:text-white transition-colors">
                Reset to Defaults
              </button>
              <button className="px-10 py-3 bg-[#8ff5ff] text-[#005d63] font-headline font-bold uppercase tracking-tighter neon-glow transition-all hover:brightness-110 active:scale-95">
                Commit Changes
              </button>
            </div>
          </div>
        )}

        {/* USER MANAGEMENT TAB */}
        {activeTab === 'users' && (
          <div className="glass-panel p-8 rounded-lg neon-glow">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#bf81ff] text-2xl">people</span>
              <h3 className="font-headline text-2xl font-bold text-[#bf81ff] uppercase">User Management</h3>
            </div>

            <div className="space-y-6">
              {/* User List */}
              <div className="bg-[#000000] border border-[#494847] rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#1a1919] border-b border-[#494847]">
                      <tr>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Name</th>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Email</th>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Role</th>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Status</th>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#262626]">
                      {[
                        { name: 'Admin User', email: 'admin@model-auditor.io', role: 'Administrator', status: 'Active' },
                        { name: 'Audit Operator', email: 'operator@model-auditor.io', role: 'Operator', status: 'Active' },
                        { name: 'Monitor Agent', email: 'monitor@model-auditor.io', role: 'Observer', status: 'Inactive' },
                      ].map((user, idx) => (
                        <tr key={idx} className="hover:bg-[#1a1919] transition-colors">
                          <td className="px-6 py-4 text-sm text-white">{user.name}</td>
                          <td className="px-6 py-4 text-sm text-[#adaaaa]">{user.email}</td>
                          <td className="px-6 py-4 text-sm text-[#8ff5ff] font-mono">{user.role}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest ${
                              user.status === 'Active'
                                ? 'bg-[#afffd1]/20 text-[#afffd1]'
                                : 'bg-[#494847]/20 text-[#adaaaa]'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <button className="text-[#8ff5ff] hover:text-white transition-colors text-[10px] uppercase font-bold">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add User Form */}
              <div className="bg-[#131313] border border-[#494847]/20 p-6 rounded-lg">
                <h4 className="font-headline text-lg font-bold text-[#bf81ff] uppercase mb-4">Add New User</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm text-sm focus:border-[#bf81ff] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm text-sm focus:border-[#bf81ff] outline-none"
                  />
                  <select className="bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm text-sm focus:border-[#bf81ff] outline-none">
                    <option>Select Role</option>
                    <option>Administrator</option>
                    <option>Operator</option>
                    <option>Observer</option>
                  </select>
                  <button className="bg-[#bf81ff] text-[#32005c] font-headline font-bold uppercase tracking-tighter py-3 rounded-sm hover:brightness-110 transition-all active:scale-95">
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NETWORK CONFIG TAB */}
        {activeTab === 'network' && (
          <div className="glass-panel p-8 rounded-lg neon-glow">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#afffd1] text-2xl">router</span>
              <h3 className="font-headline text-2xl font-bold text-[#afffd1] uppercase">Network Configuration</h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">API Host</label>
                  <input
                    type="text"
                    defaultValue=""
                    className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm focus:border-[#afffd1] outline-none transition-colors"
                    placeholder="0.0.0.0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">API Port</label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm focus:border-[#afffd1] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                    Max Connections
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm focus:border-[#afffd1] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#494847] font-bold">
                    Request Timeout (ms)
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm focus:border-[#afffd1] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="bg-[#131313] border border-[#494847]/20 p-6 rounded-lg">
                <h4 className="font-headline text-lg font-bold text-[#afffd1] uppercase mb-4">Allowed Origins (CORS)</h4>
                <div className="space-y-2">
                  {[].map((origin, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-[#000000] border border-[#494847] p-4 rounded-sm">
                      <span className="text-white text-sm font-mono">{origin}</span>
                      <button className="text-[#ff716c] hover:text-[#ff9994] transition-colors">
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Add new origin..."
                  className="w-full mt-4 bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm text-sm focus:border-[#afffd1] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* WEBHOOKS TAB */}
        {activeTab === 'webhooks' && (
          <div className="glass-panel p-8 rounded-lg neon-glow">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#8ff5ff] text-2xl">webhook</span>
              <h3 className="font-headline text-2xl font-bold text-[#8ff5ff] uppercase">Global Webhooks</h3>
            </div>

            <div className="space-y-6">
              {/* Webhook List */}
              <div className="bg-[#000000] border border-[#494847] rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#1a1919] border-b border-[#494847]">
                      <tr>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Event</th>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Endpoint URL</th>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Status</th>
                        <th className="px-6 py-3 text-[10px] uppercase tracking-widest text-[#adaaaa] font-bold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#262626]">
                      {([] as { event: string; url: string; status: string }[]).map((webhook, idx) => (
                        <tr key={idx} className="hover:bg-[#1a1919] transition-colors">
                          <td className="px-6 py-4 text-sm text-white font-mono">{webhook.event}</td>
                          <td className="px-6 py-4 text-sm text-[#adaaaa] font-mono">{webhook.url}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest ${
                              webhook.status === 'Active'
                                ? 'bg-[#afffd1]/20 text-[#afffd1]'
                                : 'bg-[#494847]/20 text-[#adaaaa]'
                            }`}>
                              {webhook.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <button className="text-[#8ff5ff] hover:text-white transition-colors text-[10px] uppercase font-bold">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add Webhook Form */}
              <div className="bg-[#131313] border border-[#494847]/20 p-6 rounded-lg">
                <h4 className="font-headline text-lg font-bold text-[#8ff5ff] uppercase mb-4">Add New Webhook</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm text-sm focus:border-[#8ff5ff] outline-none">
                    <option>Select Event Type</option>
                    <option>model.flagged</option>
                    <option>audit.completed</option>
                    <option>alert.critical</option>
                    <option>agent.registered</option>
                  </select>
                  <input
                    type="url"
                    placeholder="https://webhook.example.com/endpoint"
                    className="bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm text-sm focus:border-[#8ff5ff] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Secret Token (optional)"
                    className="bg-[#000000] border border-[#494847] text-white px-4 py-3 rounded-sm text-sm focus:border-[#8ff5ff] outline-none"
                  />
                  <button className="bg-[#8ff5ff] text-[#005d63] font-headline font-bold uppercase tracking-tighter py-3 rounded-sm hover:brightness-110 transition-all active:scale-95">
                    Add Webhook
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
