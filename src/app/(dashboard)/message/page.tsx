'use client';

import DashboardLayout from '@/components/dashboard/DashboardLayout';
// import MessageInfo from '@/components/dashboard/section/MessageInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';

// export const metadata = {
//   title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Message',
// };

import dynamic from 'next/dynamic';

const MessageInfo = dynamic(() => import('@/components/dashboard/section/MessageInfo'), {ssr: false})

export default function page() {
  return (
    <>
      <MobileNavigation2 />
      <DashboardLayout>
        <MessageInfo />
      </DashboardLayout>
    </>
  );
}
