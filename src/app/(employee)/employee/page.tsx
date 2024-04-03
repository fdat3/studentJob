'use client'

import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb14 from '@/components/breadcrumb/Breadcrumb14';
import Listing12 from '@/components/section/Listing12';
import TabSection1 from '@/components/section/TabSection1';
import Header6 from '@/components/header/Header6';

export default function page() {
  return (
    <>
      <Header6 />
      < TabSection1 />
      {/* 
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} /> */}
      <Breadcrumb14 />
      <Listing12 />
    </>
  );
}
