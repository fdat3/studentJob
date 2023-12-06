'use client';

import { useEffect, useState } from 'react';

export default function BottomToTop() {
  const [isBottom, setBottom] = useState(false);

  // scroll from top
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setBottom(scrollTop > 200);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    return () => {}; // Return a no-op function if window is undefined
  }, []);

  // bottom to top handler
  const bottomToTopHandler = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* <a */}
      {/*  onClick={bottomToTopHandler} */}
      {/*  className={`scrollToHome ${isBottom ? 'show' : ''}`} */}
      {/* > */}
      {/*  <i className="fas fa-angle-up" /> */}
      {/* </a> */}
      <button
        type="button" // Explicitly define the type attribute
        onClick={bottomToTopHandler}
        className={`scrollToHome ${isBottom ? 'show' : ''}`}
        tabIndex={0} // Add tabIndex to make it focusable
        onKeyDown={bottomToTopHandler} // Add keyboard listener
      >
        {/* Add a visually hidden label for screen readers */}
        <span
          style={{
            position: 'absolute',
            left: '-10000px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
        >
          Scroll to top
        </span>
        <i className="fas fa-angle-up" />
      </button>
    </>
  );
}
