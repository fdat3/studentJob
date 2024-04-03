'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useRef} from 'react';
import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';

import navigation from '@/data/navigation';
import {isActiveNavigation} from '@/utils/isActiveNavigation';

export default function NavSidebar() {
    const path = usePathname();
    const crossRef = useRef(null);

    return (
        <>
            <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <Link href="/">
                        <Image
                            alt="Header Logo"
                            width="133"
                            height="40"
                            src="/images/header-logo2.svg"
                        />
                    </Link>
                    <button
                        ref={crossRef}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <div className="ui-navigation-sidebar">
                        <Sidebar>
                            <Menu>
                                {navigation.map((item, i) =>
                                    <MenuItem
                                        key={i}
                                        component={<Link href={item.path}/>}
                                        className={item.path === path ? 'ui-mobile-active' : ''}
                                    >
                                        <span data-bs-dismiss="offcanvas">{item.name}</span>
                                    </MenuItem>
                                )}
                            </Menu>
                        </Sidebar>
                    </div>
                </div>
            </div>
        </>
    );
}
