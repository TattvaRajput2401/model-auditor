'use client';

import { ReactNode } from 'react';
import AnimatedSidebar from '@/components/ui/animated-sidebar';
import { AnimatePresence } from 'framer-motion';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AnimatedSidebar />
      <div className="md:ml-80 transition-all duration-300">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </div>
    </>
  );
}
