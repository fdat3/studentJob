import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import Breadcrumb11 from '@/components/breadcrumb/Breadcrumb11';
import ProjectDetail1 from '@/components/section/ProjectDetail1';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title:
    'Freeio - Freelance Marketplace React/Next Js Template | Project Signle',
};

export default function page() {
  return (
    <>
      {/* <Header3 /> */}
      <TabSection1 />
      <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb11 />
      <ProjectDetail1 />
    </>
  );
}
