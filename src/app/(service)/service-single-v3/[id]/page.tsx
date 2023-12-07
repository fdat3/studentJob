import React from 'react';

import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import PopulerService from '@/components/section/PopulerService';
import ServiceDetail2 from '@/components/section/ServiceDetails2';
import ServiceDetail3 from '@/components/section/ServiceDetails3';
import TabSection1 from '@/components/section/TabSection1';

export default function page() {
  return (
    <>
      <TabSection1 />
      <div className=" bgc-thm3">
        <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
        <ServiceDetail3 />
        <PopulerService />
      </div>
    </>
  );
}
