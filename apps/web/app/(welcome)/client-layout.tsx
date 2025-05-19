'use client';
import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation de chargement
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && children}
    </>
  );
}
