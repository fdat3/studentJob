'use client';

import { useEffect, useState } from 'react';

export default function useStickyMenu(max: number = 20) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsSticky(scrollTop > max);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return isSticky;
}
