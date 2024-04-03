'use client';

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MobileNavigation2 from '@/components/header/MobileNavigation2';

// export const metadata = {
//   title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Payout',
// };

import dynamic from 'next/dynamic';

const PayoutInfo = dynamic(() => import('@/components/dashboard/section/PayoutInfo'), {ssr: false})

export default function page() {
  return (
    <>
      <MobileNavigation2 />
      <DashboardLayout>
        <PayoutInfo />
      </DashboardLayout>
    </>
  );
}
