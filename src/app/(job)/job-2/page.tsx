import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb12 from '@/components/breadcrumb/Breadcrumb12';
import Listing10 from '@/components/section/Listing10';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Job 2',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb12 />
      <Listing10 />
    </>
  );
}
