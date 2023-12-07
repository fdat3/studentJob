import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb6 from '@/components/breadcrumb/Breadcrumb6';
import Listing4 from '@/components/section/Listing4';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Service 4',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb6 />
      <Listing4 />
    </>
  );
}
