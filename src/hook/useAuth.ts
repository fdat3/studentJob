'use client';

import { useContext, useEffect } from 'react';

import type { AuthContextType } from '@/context/auth/AuthContext';
import { AuthContext } from '@/context/auth/AuthContext';

export default function useAuth(): AuthContextType {
  // Check cookies valid
  const context: AuthContextType = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
