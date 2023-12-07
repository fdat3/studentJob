import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import Breadcrumb15 from '@/components/breadcrumb/Breadcrumb15';
import Header3 from '@/components/header/Header3';
import EmplyeeDetail1 from '@/components/section/EmplyeeDetail1';
import JobInvision1 from '@/components/section/JobInvision1';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title:
    'Freeio - Freelance Marketplace React/Next Js Template | Emplyee Single',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb15 />
      <EmplyeeDetail1 />
      <JobInvision1 />
    </>
  );
}
