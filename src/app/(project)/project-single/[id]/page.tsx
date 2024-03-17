import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import ProjectDetail2 from '@/components/section/ProjectDetails2';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title:
    'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Project Signle',
};

export default function page() {
  return (
    <>
      <TabSection1 />

      <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} />
      {/* <Breadcrumb11 /> */}
      <ProjectDetail2 />
    </>
  );
}
