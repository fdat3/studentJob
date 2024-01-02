'use client';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { redirect, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

import useAuth from '@/hook/useAuth';

export const GuestGuard = ({ children }: { children: ReactNode }) => {
  const router: AppRouterInstance = useRouter();
  const { isAuthenticated, isInitialized } = useAuth();
  if (!isInitialized) return <p>Loading...</p>;
  if (isAuthenticated) return router.push('/my-profile');
  return <>{children}</>;
};
