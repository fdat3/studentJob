'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
// import ManageServiceInfo from '@/components/dashboard/section/ManageServiceInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';

// export const metadata = {
//   title:
//     'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Manage Services',
// };

import dynamic from 'next/dynamic';

const ManageServiceInfo = dynamic(() => import('@/components/dashboard/section/ManageServiceInfo'), {ssr: false})

export default function Page() {
  return (
    <>
      <MobileNavigation2 />
      <DashboardLayout>
        <ManageServiceInfo />
      </DashboardLayout>
    </>
  );
}
