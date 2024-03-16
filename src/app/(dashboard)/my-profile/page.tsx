import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MyProfileInfo from '@/components/dashboard/section/MyProfileInfo';
import MobileNavigation2 from '@/components/header/MobileNavigation2';
import { AuthGuard } from '@/guard/AuthGuard';

export const metadata = {
  title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | My Profile',
};

export default function page() {
  return (
    <>
      <AuthGuard>
        <MobileNavigation2 />
        <DashboardLayout>
          <MyProfileInfo />
        </DashboardLayout>
      </AuthGuard>
    </>
  );
}
