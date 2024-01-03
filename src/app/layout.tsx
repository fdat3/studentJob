'use client';

import './globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { DM_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import BottomToTop from '@/components/button/BottomToTop';
import Footer from '@/components/footer/Footer';
import Footer3 from '@/components/footer/Footer3';
import Header3 from '@/components/header/Header3';
import Header6 from '@/components/header/Header6';
import SearchModal1 from '@/components/modal/SearchModal1';
import NavSidebar from '@/components/sidebar/NavSidebar';
import { AuthProvider } from '@/context/auth/AuthContext';
import { footer } from '@/data/footer';
import { header3, header6, sidebarEnable } from '@/data/header';
import toggleStore from '@/store/toggleStore';

if (typeof window !== 'undefined') {
  import('bootstrap');
}

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  const isListingActive = toggleStore((state) => state.isListingActive);
  const path = usePathname();
  const isAuthPage = path === '/register' || path === '/login';
  const enableSidebar = sidebarEnable.includes(path);
  let className = '';
  if (isAuthPage) {
    className = 'bgc-thm4 mm-wrapper mm-wrapper--position-left-front';
  } else if (enableSidebar) {
    className = isListingActive ? 'menu-hidden-sidebar-content' : '';
  }

  // wow js
  useEffect(() => {
    // eslint-disable-next-line global-require
    const { WOW } = require('wowjs');
    const wow = new WOW({
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${className}`}
        suppressHydrationWarning
      >
        <AuthProvider>
          {!footer.includes(path) ? (
            <div className="wrapper ovh mm-page mm-slideout">
              {header3.find(
                (elm) => elm?.split('/')[1] === path?.split('/')[1],
              ) && <Header3 />}
              {header6.find(
                (elm) => elm?.split('/')[1] === path?.split('/')[1],
              ) && <Header6 />}
              <SearchModal1 />

              <div className="body_content">
                {children}
                {/* footer */}
                {path === '/' ? (
                  <Footer3 />
                ) : (
                  path !== '/service-7' && path !== '/invoices' && <Footer />
                )}

                {/* bottom to top */}
                <BottomToTop />
              </div>
            </div>
          ) : (
            <div className="wrapper mm-page mm-slideout">
              {children}
              {/* bottom to top */}
              <BottomToTop />
            </div>
          )}

          {/* sidebar mobile navigation */}
          <NavSidebar />
        </AuthProvider>
      </body>
    </html>
  );
}
