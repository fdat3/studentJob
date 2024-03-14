'use client';

import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import Breadcrumb13 from '@/components/breadcrumb/Breadcrumb13';
import JobDetail1 from '@/components/section/JobDetail1';
import TabSection1 from '@/components/section/TabSection1';

// export const metadata = {
//   title: 'Freeio - Freelance Marketplace React/Next Js Template | Job Single',
// };

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <TabSection1 />
      {/* <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} /> */}
      <Breadcrumb13 />
      <JobDetail1 id={params.id} />
    </>
  );
}
