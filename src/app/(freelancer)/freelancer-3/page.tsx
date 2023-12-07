import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb16 from '@/components/breadcrumb/Breadcrumb16';
import Listing15 from '@/components/section/Listing15';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Freelancer 3',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb16 />
      <Listing15 />
    </>
  );
}
