'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
// import CreateProjectInfo from '@/components/dashboard/section/CreateProjectInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';

import dynamic from 'next/dynamic';

const CreateProjectInfo = dynamic(() => import('@/components/dashboard/section/CreateProjectInfo'), {ssr: false})

// export const metadata = {
//   title:
//     'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Create Project',
// };

export default function page() {
  return (
    <>
      <MobileNavigation2 />
      <DashboardLayout>
        <CreateProjectInfo />
      </DashboardLayout>
    </>
  );
}
