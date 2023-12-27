import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb12 from '@/components/breadcrumb/Breadcrumb12';
import Listing16 from '@/components/section/Listing16';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Job 3',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb12 />
      <Listing16 />
    </>
  );
}
