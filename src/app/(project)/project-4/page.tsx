import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import Breadcrumb18 from '@/components/breadcrumb/Breadcrumb18';
import Listing19 from '@/components/section/Listing19';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Project 1',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <div className=" bgc-thm3">
        <Breadcrumb18 />
        <Listing19 />
      </div>
    </>
  );
}
