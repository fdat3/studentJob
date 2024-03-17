'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useAuth from '@/hook/useAuth';

import Mega from './Mega';
import MobileNavigation2 from './MobileNavigation2';
import Navigation from './Navigation';

export default function Header3() {
  const path = usePathname();
  const { isAuthenticated } = useAuth();
  return (
    <>
      <header className="header-nav nav-innerpage-style main-menu  ">
        <nav className="posr">
          <div className="container-fluid posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto pe-0">
                <div className="d-flex align-items-center">
                  <Link className="header-logo bdrr1 pr30 pr5-xl" href="/">
                    <Image
                      height={40}
                      width={133}
                      className="w-100 h-100 object-fit-contain"
                      src="/images/tdtu_logo.png"
                      alt="Header Logo"
                    />
                  </Link>
                  <div className="home1_style">
                    <Mega />
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <Navigation />
                  <a
                    className="login-info bdrl1 pl15-lg pl30"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                  <Link
                    className={`login-info mx15-lg mx30 ${
                      path === '/become-seller' ? 'ui-active' : ''
                    }`}
                    href="/become-seller"
                  >
                    <span className="d-none d-xl-inline-block">Become a</span>{' '}
                    Seller
                  </Link>
                  {isAuthenticated ? (
                    <Link
                      className="ud-btn btn-thm add-joining"
                      href="/my-profile"
                    >
                      Profile
                    </Link>
                  ) : (
                    <>
                      <Link
                        className={`login-info mr15-lg mr30 ${
                          path === '/signin' ? 'ui-active' : ''
                        }`}
                        href="/signin"
                      >
                        Sign in
                      </Link>
                      <Link
                        className="ud-btn btn-thm add-joining"
                        href="/signup"
                      >
                        Join
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation2 />
    </>
  );
}
