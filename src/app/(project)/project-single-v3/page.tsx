import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import Breadcrumb11 from '@/components/breadcrumb/Breadcrumb11';
import ProjectDetail1 from '@/components/section/ProjectDetail1';
import ProjectDetail3 from '@/components/section/ProjectDetails3';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title:
    'Freeio - Freelance Marketplace React/Next Js Template | Project Signle',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <div className="bgc-thm3">
        <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} />
        {/* <Breadcrumb11 /> */}
        <ProjectDetail3 />
      </div>
    </>
  );
}
