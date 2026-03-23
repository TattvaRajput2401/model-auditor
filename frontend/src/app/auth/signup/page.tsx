'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'confirmPassword' || name === 'password') {
      setPasswordMatch(
        name === 'confirmPassword'
          ? formData.password === value
          : value === formData.confirmPassword
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!passwordMatch) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          full_name: formData.fullName,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Signup failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col">
      {/* Background Decoration */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#8ff5ff]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#bf81ff]/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#8ff5ff]/[0.03] to-transparent"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 border-b border-[#494847]/10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#8ff5ff] flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-[#005d63] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield_lock
            </span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tighter text-[#8ff5ff] uppercase">
            Model Auditor
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="font-headline text-xs tracking-widest text-[#adaaaa] hover:text-[#8ff5ff] transition-colors uppercase">
            System Status: Optimal
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="w-full max-w-[500px]">
          {/* Auth Card */}
          <div className="glass-panel p-10 rounded-lg relative overflow-hidden group">
            {/* Subtle Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bf81ff] to-transparent opacity-50"></div>

            <div className="mb-10 text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tight mb-2 uppercase text-white">
                Join Observatory
              </h1>
              <p className="text-[#adaaaa] text-sm font-medium tracking-wide">
                Create your auditor account and initialize the system
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-[#ff716c]/10 border border-[#ff716c]/30 rounded-sm text-[#ff716c] text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-[#adaaaa] ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-lg">
                    person
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#000000] border border-[#494847] pl-12 pr-4 py-3 text-sm font-mono focus:border-[#bf81ff] focus:outline-none transition-colors placeholder:text-[#494847]/40 rounded-sm"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="space-y-2">
                <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-[#adaaaa] ml-1">
                  Username
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-lg">
                    account_circle
                  </span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="auditor_01"
                    className="w-full bg-[#000000] border border-[#494847] pl-12 pr-4 py-3 text-sm font-mono focus:border-[#bf81ff] focus:outline-none transition-colors placeholder:text-[#494847]/40 rounded-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-[#adaaaa] ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-lg">
                    mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="operator@model-auditor.io"
                    className="w-full bg-[#000000] border border-[#494847] pl-12 pr-4 py-3 text-sm font-mono focus:border-[#bf81ff] focus:outline-none transition-colors placeholder:text-[#494847]/40 rounded-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-[#adaaaa] ml-1">
                  Access Cipher
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-lg">
                    key
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                    className="w-full bg-[#000000] border border-[#494847] pl-12 pr-4 py-3 text-sm font-mono focus:border-[#bf81ff] focus:outline-none transition-colors placeholder:text-[#494847]/40 rounded-sm"
                  />
                </div>
                <p className="text-[9px] text-[#adaaaa]">Minimum 8 characters, mix of letters and numbers</p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-[#adaaaa] ml-1">
                  Confirm Cipher
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-lg">
                    check_circle
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                    className={`w-full bg-[#000000] border pl-12 pr-4 py-3 text-sm font-mono focus:outline-none transition-colors placeholder:text-[#494847]/40 rounded-sm ${
                      passwordMatch && formData.confirmPassword
                        ? 'border-[#afffd1] focus:border-[#afffd1]'
                        : 'border-[#494847] focus:border-[#ff716c]'
                    }`}
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer group mt-6">
                <input type="checkbox" className="w-4 h-4 bg-[#000000] border border-[#494847]/20 rounded-sm text-[#bf81ff] focus:outline-none" />
                <span className="text-[10px] uppercase tracking-wider text-[#adaaaa] group-hover:text-white transition-colors">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !passwordMatch}
                className="w-full mt-8 group relative overflow-hidden bg-[#bf81ff] text-[#32005c] py-4 font-headline font-bold uppercase tracking-[0.15em] text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(191,129,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-[#32005c] border-t-transparent rounded-full animate-spin"></span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#adaaaa]">
                Already connected?{' '}
                <Link href="/auth/login" className="text-[#bf81ff] hover:text-white transition-colors font-bold">
                  Initialize Login
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#adaaaa]/60">
              Secure Account Creation — <span className="text-[#bf81ff]/60">Protocol: TLS 1.3</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
