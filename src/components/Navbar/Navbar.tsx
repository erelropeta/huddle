import React from 'react';

import './navbar.scss';

import Logo from '../../assets/images/logo.svg';
import BtnLink from '../BtnLink/BtnLink';

const Navbar = () => {
  return (
    <div className="navbar container">
      <a href="/">
        <img className="logo" src={Logo} alt="Huddle logo" />
      </a>
      <BtnLink
        title="Try It Free"
        link="/signup"
        classNames="btn-link btn-link--white"
      />
    </div>
  );
};

export default Navbar;
