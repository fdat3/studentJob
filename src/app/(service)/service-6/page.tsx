import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb7 from '@/components/breadcrumb/Breadcrumb7';
import Listing6 from '@/components/section/Listing6';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Service 6',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb7 />
      <Listing6 />
    </>
  );
}
