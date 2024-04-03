'use client'

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MobileNavigation2 from '@/components/header/MobileNavigation2';

// export const metadata = {
//   title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Invoice',
// };

import dynamic from 'next/dynamic';

const InvoiceInfo = dynamic(() => import('@/components/dashboard/section/InvoiceInfo'), {ssr: false})

export default function page() {
  return (
    <>
      <MobileNavigation2 />
      <DashboardLayout>
        <InvoiceInfo />
      </DashboardLayout>
    </>
  );
}
