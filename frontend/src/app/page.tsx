'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="material-symbols-outlined text-6xl text-primary mb-4 animate-spin">loading</div>
        <p className="text-on-surface-variant font-body">Initializing Model Auditor...</p>
      </div>
    </div>
  );
}
