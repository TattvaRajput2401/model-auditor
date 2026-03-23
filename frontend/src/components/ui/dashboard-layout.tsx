'use client';

import Sidebar from './sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-20 md:ml-64 pt-20 px-6 md:px-8 pb-12 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}