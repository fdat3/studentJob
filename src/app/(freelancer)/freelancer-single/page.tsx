import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import FreelancerDetail3 from '@/components/section/FreelancerDetails3';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title:
    'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Freelancer Single',
};

export default function page() {
  return (
    <>
      {/* <TabSection1 /> */}
      <div className="bgc-thm3">
        {/* <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} /> */}

        <FreelancerDetail3 />
      </div>
    </>
  );
}
