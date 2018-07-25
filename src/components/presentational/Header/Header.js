import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      NFL Player List
      <img src={logo} alt="Logo" className="header-logo" />
    </div>
  );
}

export default Header
