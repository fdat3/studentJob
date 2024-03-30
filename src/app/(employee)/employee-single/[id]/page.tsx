'use client'

import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import Breadcrumb15 from '@/components/breadcrumb/Breadcrumb15';
import Header3 from '@/components/header/Header3';
import Header6 from '@/components/header/Header6';
import EmplyeeDetail1 from '@/components/section/EmplyeeDetail1';
import JobInvision1 from '@/components/section/JobInvision1';
import TabSection1 from '@/components/section/TabSection1';


export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header6 />
      <TabSection1 />
      {/* 
      <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} /> */}
      {/* <Breadcrumb15 /> */}
      <EmplyeeDetail1 id={params.id} />
      <JobInvision1 id={params.id} />
    </>
  );
}
