'use client'
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } grid lg:grid-cols-3 px-10 py-5 bg-transparent`}
    >
      <div></div>

      <div className='flex justify-center items-center'>
        <a>
          <img src="secondlogo.png" alt="Logo" className='w-50' />
        </a>
      </div>

      <div className='flex justify-end items-center'>
        <a href='/contact' className='uppercase text-xl px-10 py-3 bg-white font-bold text-orange-700'>Let's Connect</a>
      </div>
    </nav>
  );
};

export default Header;
