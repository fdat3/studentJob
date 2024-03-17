import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb16 from '@/components/breadcrumb/Breadcrumb16';
import Listing14 from '@/components/section/Listing14';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Freelancer 2',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb16 />
      <Listing14 />
    </>
  );
}
