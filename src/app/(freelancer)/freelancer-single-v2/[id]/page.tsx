import Breadcrumb10 from '@/components/breadcrumb/Breadcrumb10';
import Breadcrumb17 from '@/components/breadcrumb/Breadcrumb17';
import FreelancerDetails2 from '@/components/section/FreelancerDetails2';
import TabSection1 from '@/components/section/TabSection1';

export const metadata = {
  title:
    'Freeio - Freelance Marketplace React/Next Js Template | Freelancer Single',
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcrumb10 path={['Home', 'Services', 'Design & Creative']} />

      <FreelancerDetails2 />
    </>
  );
}
