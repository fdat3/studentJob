'use client';

import toggleStore from '@/store/toggleStore';

import DashboardFooter from './footer/DashboardFooter';
import DashboardHeader from './header/DashboardHeader';
import DashboardSidebar from './sidebar/DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const isActive = toggleStore((state) => state.isDashboardSidebarActive);

  return (
    <>
      <DashboardHeader />
      <div className="dashboard_content_wrapper">
        <div
          className={`dashboard dashboard_wrapper pr30 pr0-xl ${
            isActive ? 'dsh_board_sidebar_hidden' : ''
          }`}
        >
          <DashboardSidebar />
          <div className="dashboard__main pl0-md">
            {children}
            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
}
