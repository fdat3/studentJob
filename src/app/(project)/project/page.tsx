import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb9 from '@/components/breadcrumb/Breadcrumb9';
import Listing17 from '@/components/section/Listing17';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Project 1',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb9 />
      <Listing17 />
    </>
  );
}
