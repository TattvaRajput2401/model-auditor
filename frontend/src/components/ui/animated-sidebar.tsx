'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Bot,
  Terminal,
  Shield,
  Settings,
  LogOut,
  HelpCircle,
} from 'lucide-react';

const NavItem = ({
  href,
  label,
  icon: Icon,
  active,
  isOpen,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
  isOpen: boolean;
}) => (
  <Link href={href}>
    <motion.div
      className={`flex items-center gap-4 py-3 px-4 transition-all duration-200 rounded-sm ${
        active
          ? 'text-primary bg-primary/5 border-l-2 border-primary'
          : 'text-slate-400 hover:text-primary hover:bg-slate-800/30'
      }`}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        animate={active ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
        transition={{ duration: active ? 0.6 : 0.3 }}
      >
        <Icon
          size={20}
          className={`flex-shrink-0 transition-colors duration-200 ${
            active ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
          }`}
          strokeWidth={1.5}
        />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="font-headline text-sm uppercase tracking-widest"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  </Link>
);

export default function AnimatedSidebar() {
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
      {/* Animated Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 256 : 80 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full z-40 flex flex-col pt-20 pb-8 bg-gradient-to-b from-slate-950 to-[#0A0A0A] border-r border-slate-800/50 shadow-[4px_0_24px_rgba(0,240,255,0.05)] font-headline"
      >
        {/* Sidebar Header with Toggle */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-4 md:px-6 border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
          <AnimatePresence>
            {isOpen && (
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-primary font-black text-sm uppercase tracking-tighter hidden md:block"
              >
                Model Auditor
              </motion.h2>
            )}
          </AnimatePresence>

          {/* Animated Burger Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-slate-800/50 rounded-sm transition-all duration-200 text-cyan-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="relative w-5 h-5 flex flex-col justify-center items-center gap-1.5">
              {/* Top line */}
              <motion.div
                initial={false}
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-5 h-0.5 bg-cyan-400 rounded-full origin-center"
              />
              {/* Middle line */}
              <motion.div
                initial={false}
                animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-5 h-0.5 bg-cyan-400 rounded-full"
              />
              {/* Bottom line */}
              <motion.div
                initial={false}
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-5 h-0.5 bg-cyan-400 rounded-full origin-center"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Sidebar Header */}
        <div className={`px-6 mb-8 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-2"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-slate-400 uppercase tracking-widest">System Online</span>
          </motion.div>
          <h2 className="text-primary font-black text-lg uppercase tracking-tighter">Model Auditor</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-2">
          <NavItem
            href="/dashboard"
            label="Dashboard"
            icon={LayoutDashboard}
            active={isActive('/dashboard') || isActive('/')}
            isOpen={isOpen}
          />
          <NavItem
            href="/agents"
            label="Agents"
            icon={Bot}
            active={isActive('/agents')}
            isOpen={isOpen}
          />
          <NavItem
            href="/logs"
            label="Logs"
            icon={Terminal}
            active={isActive('/logs')}
            isOpen={isOpen}
          />
          <NavItem
            href="/alerts"
            label="Security"
            icon={Shield}
            active={isActive('/alerts')}
            isOpen={isOpen}
          />
          <NavItem
            href="/settings"
            label="Settings"
            icon={Settings}
            active={isActive('/settings')}
            isOpen={isOpen}
          />
        </nav>

        {/* Sidebar Footer */}
        <div
          className={`px-4 mt-auto pt-4 border-t border-slate-800/50 space-y-2 transition-all duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.button
            className="w-full py-3 px-4 bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="12 5 12 19"></polyline>
              <polyline points="5 12 19 12"></polyline>
            </svg>
            <span>New Audit</span>
          </motion.button>

          {user && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-3 px-3 bg-slate-900/50 rounded-sm border border-slate-800/50 backdrop-blur-sm"
            >
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Current User</p>
              <p className="text-xs text-primary font-bold truncate">{user.username}</p>
              <p className="text-[9px] text-slate-400 truncate">{user.email}</p>
            </motion.div>
          )}

          <div className="pt-2 space-y-1">
            <motion.a
              href="#"
              className="flex items-center gap-3 text-slate-400 hover:text-primary py-2 px-3 transition-colors text-xs uppercase tracking-widest rounded-sm"
              whileHover={{ x: 4 }}
            >
              <HelpCircle size={16} strokeWidth={1.5} />
              <span>Support</span>
            </motion.a>
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 text-slate-400 hover:text-red-400 py-2 px-3 transition-colors text-xs uppercase tracking-widest rounded-sm"
              whileHover={{ x: 4 }}
            >
              <LogOut size={16} strokeWidth={1.5} />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>

        {/* Collapsed Icon Indicator */}
        {!isOpen && (
          <div className="px-2 py-4 space-y-4 text-center">
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400 mx-auto"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        )}
      </motion.aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
