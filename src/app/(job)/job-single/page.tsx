'use client';

import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import Breadcrumb13 from '@/components/breadcrumb/Breadcrumb13';
import TabSection1 from '@/components/section/TabSection1';

import dynamic from 'next/dynamic';

const JobDetail1 = dynamic(() => import('@/components/section/JobDetail1'), {ssr: false})

// export const metadata = {
//   title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Job Single',
// };

export default function page() {
  return (
    <>
      <TabSection1 />
      {/* <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} /> */}
      <Breadcrumb13 />
      <JobDetail1 />
    </>
  );
}
