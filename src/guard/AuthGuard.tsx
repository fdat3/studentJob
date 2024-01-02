'use client';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { redirect, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import useAuth from '@/hook/useAuth';

export const AuthGuard = ({
  children,
}: {
  children: ReactNode;
}): ReactNode | null => {
  const router: AppRouterInstance = useRouter();
  const { isAuthenticated, isInitialized } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && isInitialized) router.push('/login');
  }, [isAuthenticated, isInitialized, router]);
  if (!isInitialized) return <p>Loading...</p>;
  return <>{children}</>;
};
