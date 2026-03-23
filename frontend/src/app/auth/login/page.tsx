'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      if (rememberMe) {
        localStorage.setItem('remember_me', 'true');
      }

      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
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
        <div className="w-full max-w-[440px]">
          {/* Auth Card */}
          <div className="glass-panel p-10 rounded-lg relative overflow-hidden group">
            {/* Subtle Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8ff5ff] to-transparent opacity-50"></div>

            <div className="mb-10 text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tight mb-2 uppercase text-white">
                Command Center
              </h1>
              <p className="text-[#adaaaa] text-sm font-medium tracking-wide">
                Enter credentials to initialize observatory
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-[#ff716c]/10 border border-[#ff716c]/30 rounded-sm text-[#ff716c] text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div className="space-y-4">
                <div className="relative">
                  <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-[#adaaaa] mb-2 ml-1">
                    Operator Identity
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-lg">
                      fingerprint
                    </span>
                    <input
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      placeholder="username or email"
                      className="w-full bg-[#000000] border border-[#494847] pl-12 pr-4 py-4 text-sm font-mono focus:border-[#8ff5ff] focus:outline-none transition-colors placeholder:text-[#494847]/40 rounded-sm"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2 ml-1">
                    <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-[#adaaaa]">
                      Access Cipher
                    </label>
                    <Link href="/auth/forgot-password" className="text-[10px] uppercase tracking-[0.1em] text-[#8ff5ff]/70 hover:text-[#8ff5ff] transition-colors">
                      Recover Keys
                    </Link>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#adaaaa] text-lg">
                      key
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      placeholder="••••••••••••"
                      className="w-full bg-[#000000] border border-[#494847] pl-12 pr-4 py-4 text-sm font-mono focus:border-[#8ff5ff] focus:outline-none transition-colors placeholder:text-[#494847]/40 rounded-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between py-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 bg-[#000000] border border-[#494847]/20 rounded-sm text-[#8ff5ff] focus:outline-none"
                  />
                  <span className="text-[11px] uppercase tracking-wider text-[#adaaaa] group-hover:text-white transition-colors">
                    Persistent Session
                  </span>
                </label>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#afffd1] animate-pulse"></div>
                  <span className="text-[10px] uppercase tracking-wider text-[#afffd1] font-medium">
                    Secure Link Active
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full group relative overflow-hidden bg-[#8ff5ff] text-[#005d63] py-4 font-headline font-bold uppercase tracking-[0.15em] text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(143,245,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-[#005d63] border-t-transparent rounded-full animate-spin"></span>
                    Authenticating...
                  </>
                ) : (
                  <>
                    Initialize Session
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#494847]/20"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] font-medium">
                <span className="bg-[#1a1919] px-4 text-[#adaaaa]">Federated Auth</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 bg-[#131313] border border-[#494847]/10 hover:bg-[#262626] transition-all group rounded-sm">
                <span className="material-symbols-outlined text-[#adaaaa] group-hover:text-[#8ff5ff] transition-colors text-xl">
                  terminal
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#adaaaa] group-hover:text-white transition-colors">
                  Protocol
                </span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 bg-[#131313] border border-[#494847]/10 hover:bg-[#262626] transition-all group rounded-sm">
                <span className="material-symbols-outlined text-[#adaaaa] group-hover:text-[#bf81ff] transition-colors text-xl">
                  token
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#adaaaa] group-hover:text-white transition-colors">
                  MFA-Node
                </span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#adaaaa]">
                New here?{' '}
                <Link href="/auth/signup" className="text-[#8ff5ff] hover:text-white transition-colors font-bold">
                  Create Account
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#adaaaa]/60">
              Unauthorized Access Prohibited — <span className="text-[#8ff5ff]/60">Node: AUDIT-MAIN-01</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
