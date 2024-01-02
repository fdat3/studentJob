'use client';

import React from 'react';

import type { UserRoles } from '@/common/const/auth.const';
import useAuth from '@/hook/useAuth';

export interface RoleBasedGuardProps {
  accessibleRoles: UserRoles[];
  children: React.ReactNode;
}

export const RoleBasedGuard = ({
  children,
  accessibleRoles,
}: RoleBasedGuardProps) => {
  const { user } = useAuth();

  if (!accessibleRoles.includes(user!.role)) {
    return (
      // TODO: Create a popup unauthorized
      <>
        <p>403 Forbidden</p>
      </>
    );
  }

  return <>{children}</>;
};
