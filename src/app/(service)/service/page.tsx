import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Listing5 from '@/components/section/Listing5';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Service 5',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Listing5 />
    </>
  );
}
