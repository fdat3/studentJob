'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dashboardNavigation } from '@/data/dashboard';

export default function DashboardSidebar() {
  const path = usePathname();

  return (
    <>
      <div className="dashboard__sidebar d-none d-lg-block">
        <div className="dashboard_sidebar_list">
          {/* <p className="fz15 fw400 ff-heading pl30">Start</p> */}
          {dashboardNavigation.slice(0, 8).map((item, i) => (
            <div key={i} className="sidebar_list_item mb-1">
              <Link
                href={item.path}
                className={`items-center ${path === item.path ? '-is-active' : ''
                  }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}

          {/* <p className="fz15 fw400 ff-heading pl30 mt30">Organize and Manage</p> */}

          {dashboardNavigation.slice(8, 13).map((item, i) => (
            <div key={i} className="sidebar_list_item mb-1">
              <Link
                href={item.path}
                className={`items-center ${path === item.path ? '-is-active' : ''
                  }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}

          <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
          {dashboardNavigation.slice(13, 15).map((item, i) => (
            <div key={i} className="sidebar_list_item mb-1">
              <Link
                href={item.path}
                className={`items-center ${path === item.path ? '-is-active' : ''
                  }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
