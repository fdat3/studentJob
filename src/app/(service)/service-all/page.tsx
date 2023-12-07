import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import ListStyleContent from '@/components/section/ListStyleContent';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Service All',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <ListStyleContent />
    </>
  );
}
