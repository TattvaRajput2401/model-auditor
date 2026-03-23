'use client';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 pt-20 px-6 md:px-8 pb-12 transition-all duration-300">
      {children}
    </main>
  );
}