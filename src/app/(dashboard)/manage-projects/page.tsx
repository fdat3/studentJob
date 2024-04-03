'use client';

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MobileNavigation2 from '@/components/header/MobileNavigation2';

// export const metadata = {
//   title:
//     'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Manage Project',
// };

import dynamic from 'next/dynamic';

const ManageProjectInfo = dynamic(() => import('@/components/dashboard/section/ManageProjectInfo'), {ssr: false})

export default function Page() {
  return (
    <>
      <MobileNavigation2 />
      <DashboardLayout>
        <ManageProjectInfo />
      </DashboardLayout>
    </>
  );
}
