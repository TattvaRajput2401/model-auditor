'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Loader2 size={60} className="text-cyan-400 mb-4 animate-spin mx-auto" strokeWidth={1.5} />
        <p className="text-slate-400 font-body text-sm">Initializing Model Auditor...</p>
      </div>
    </div>
  );
}
