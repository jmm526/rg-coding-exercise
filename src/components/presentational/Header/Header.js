import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">NFL Player List</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default Header
