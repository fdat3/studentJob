import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb9 from '@/components/breadcrumb/Breadcrumb9';
import Listing8 from '@/components/section/Listing8';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Project 1',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb9 />
      <Listing8 />
    </>
  );
}
