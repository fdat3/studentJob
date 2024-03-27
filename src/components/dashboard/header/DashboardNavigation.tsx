'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// @ts-ignore
import parseJson from 'parse-json';
import { useState } from 'react';

import { dashboardNavigation, dashboardNavigationAdmin } from '@/data/dashboard';
import type { IUser } from '@/interface/entities/user.interface';

export default function DashboardNavigation() {
  const [isActive, setActive] = useState(false);
  const path = usePathname();
  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));
  console.log('check user', user?.role === 1)


  return (
    <>
      <div className="dashboard_navigationbar d-block d-lg-none">
        <div className="dropdown">
          <button onClick={() => setActive(!isActive)} className="dropbtn">
            <i className="fa fa-bars pr10" /> Dashboard Navigation
          </button>
          <ul className={`dropdown-content ${isActive ? 'show' : ''}`}>
            {user?.role === 0 &&
              dashboardNavigation.slice(0, 8).map((item, i) => (
                <li
                  className={
                    path == item.path ? 'mobile-dasboard-menu-active' : ''
                  }
                  onClick={() => setActive(false)}
                  key={i}
                >
                  <Link href={item.path}>
                    <i className={`${item.icon} mr10`} />
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
