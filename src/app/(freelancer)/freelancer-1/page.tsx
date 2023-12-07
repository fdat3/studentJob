import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb16 from '@/components/breadcrumb/Breadcrumb16';
import Listing13 from '@/components/section/Listing13';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Freelancer 1',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb16 />
      <Listing13 />
    </>
  );
}
