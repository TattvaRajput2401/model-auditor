'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

const NavItem = ({ href, label, icon, active }: { href: string; label: string; icon: string; active: boolean }) => (
  <Link
    href={href}
    className={`flex items-center gap-4 py-3 px-4 transition-all duration-200 ${
      active
        ? 'text-primary border-l-2 border-primary bg-primary/5'
        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'
    }`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span className="font-headline text-sm uppercase tracking-widest">{label}</span>
  </Link>
);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-40 flex flex-col pt-20 pb-8 bg-background border-r border-outline-variant/30 shadow-[4px_0_24px_rgba(143,245,255,0.05)] font-headline transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-20'
        } ${isMobile && !isOpen ? '-left-64' : ''}`}
      >
        {/* Sidebar Header */}
        <div className={`px-6 mb-8 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
            <span className="text-xs text-on-surface-variant uppercase tracking-widest">System Online</span>
          </div>
          <h2 className="text-primary font-black text-lg uppercase tracking-tighter">Model Auditor</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-2">
          <NavItem
            href="/dashboard"
            label="Dashboard"
            icon="dashboard"
            active={isActive('/dashboard') || isActive('/')}
          />
          <NavItem
            href="/agents"
            label="Agents"
            icon="smart_toy"
            active={isActive('/agents')}
          />
          <NavItem
            href="/logs"
            label="Logs"
            icon="terminal"
            active={isActive('/logs')}
          />
          <NavItem
            href="/alerts"
            label="Security"
            icon="shield"
            active={isActive('/alerts')}
          />
          <NavItem
            href="/settings"
            label="Settings"
            icon="settings"
            active={isActive('/settings')}
          />
        </nav>

        {/* Sidebar Footer */}
        <div className={`px-4 mt-auto pt-4 border-t border-outline-variant/30 space-y-2 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button className="w-full py-3 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            <span>New Audit</span>
          </button>
          {user && (
            <div className="py-3 px-3 bg-surface-container-low rounded-sm border border-outline-variant/20">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
                Current User
              </p>
              <p className="text-xs text-primary font-bold truncate">{user.username}</p>
              <p className="text-[9px] text-on-surface-variant truncate">{user.email}</p>
            </div>
          )}
          <div className="pt-2 space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary py-2 px-3 transition-colors text-xs uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-sm">help</span>
              <span>Support</span>
            </a>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 text-on-surface-variant hover:text-error py-2 px-3 transition-colors text-xs uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Collapsed Icon Indicator */}
        {!isOpen && (
          <div className="px-2 py-4 space-y-4 text-center">
            <div className="w-2 h-2 rounded-full bg-tertiary mx-auto animate-pulse"></div>
          </div>
        )}
      </aside>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 p-2 bg-surface-container-highest hover:bg-surface-container-high rounded-sm transition-all duration-200 text-primary active:scale-95 md:hidden"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
    </>
  );
}
