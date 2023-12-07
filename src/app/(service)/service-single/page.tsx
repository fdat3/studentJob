import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb8 from '@/components/breadcrumb/Breadcrumb8';
import ServiceDetail1 from '@/components/section/ServiceDetail1';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title:
    'Freeio - Freelance Marketplace React/Next Js Template | Service Single',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb8 />
      <ServiceDetail1 />
    </>
  );
}
