import React, { useState, useEffect } from 'react';
import logo from "../../../shared//img/logo.png";
import HeaderMenu from './HeaderMenu';

const HeaderBottom = () => {
  const [showHeaderBottom, setShowHeaderBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeaderBottom(false);
      } else {
        setShowHeaderBottom(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
    className='headerBottom'
    // className={showHeaderBottom ? "headerBottom visible" : "headerBottom hidden"}
    >
      <div className="headerBottom_img">
        <h3>НООКАТ РАЙОНДУК МАМЛЕКЕТТИК АДМИНИСТРАЦИЯСЫ</h3>
        <img src={logo} alt="Logo" />
        <h3>НООКАТСКАЯ РАЙОННАЯ ГОСУДАРСТВЕННАЯ АДМИНИСТРАЦИЯ</h3>
      </div>
      <HeaderMenu />
    </div>
  );
};

export default HeaderBottom;
