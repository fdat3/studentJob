import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProposalInfo from '@/components/dashboard/section/ProposalInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';
import { AuthGuard } from '@/guard/AuthGuard';

export const metadata = {
  title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Proposal',
};

export default function page() {
  return (
    <>
      <AuthGuard>
        <MobileNavigation2 />
        <DashboardLayout>
          <ProposalInfo />
        </DashboardLayout>
      </AuthGuard>
    </>
  );
}
