import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb4 from '@/components/breadcrumb/Breadcrumb4';
import Listing1 from '@/components/section/Listing1';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Service 1',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb4 />
      <Listing1 />
    </>
  );
}
