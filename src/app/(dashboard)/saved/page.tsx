import DashboardLayout from '@/components/dashboard/DashboardLayout';
import SavedInfo from '@/components/dashboard/section/SavedInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';
import { AuthGuard } from '@/guard/AuthGuard';

export const metadata = {
  title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Saved',
};

export default function page() {
  return (
    <AuthGuard>
      <MobileNavigation2 />
      <DashboardLayout>
        <SavedInfo />
      </DashboardLayout>
    </AuthGuard>
  );
}
