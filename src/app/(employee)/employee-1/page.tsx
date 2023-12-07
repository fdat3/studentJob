import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb14 from '@/components/breadcrumb/Breadcrumb14';
import Listing11 from '@/components/section/Listing11';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Employee 1',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb14 />
      <Listing11 />
    </>
  );
}
