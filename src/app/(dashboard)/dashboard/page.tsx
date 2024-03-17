import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardInfo from '@/components/dashboard/section/DashboardInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';
import { AuthGuard } from '@/guard/AuthGuard';

export const metadata = {
  title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Dashboard',
};

export default function page() {
  return (
    <AuthGuard>
      <MobileNavigation2 />
      <DashboardLayout>
        <DashboardInfo />
      </DashboardLayout>
    </AuthGuard>
  );
}
