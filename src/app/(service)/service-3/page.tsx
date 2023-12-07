import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb5 from '@/components/breadcrumb/Breadcrumb5';
import Listing3 from '@/components/section/Listing3';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Service 3',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb5 />
      <Listing3 />
    </>
  );
}
