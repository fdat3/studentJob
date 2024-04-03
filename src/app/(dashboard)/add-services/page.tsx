'use client'
import DashboardLayout from '@/components/dashboard/DashboardLayout';
// import AddServiceInfo from '@/components/dashboard/section/AddServiceInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';

import dynamic from 'next/dynamic';

const AddServiceInfo = dynamic(() => import('@/components/dashboard/section/AddServiceInfo'), {ssr: false})

import { useEffect } from 'react';

// export const metadata = {
//   title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Add Service',
// };

export default function page() {

  useEffect(() => {

  }, [])

  return (
    <>
      <MobileNavigation2 />
      <DashboardLayout>
        <AddServiceInfo />
      </DashboardLayout>
    </>
  );
}
