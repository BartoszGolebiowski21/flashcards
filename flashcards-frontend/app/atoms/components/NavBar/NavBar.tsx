import React from 'react';
import NavButton from './NavButton/NavButton';

const NavBar = () => {
  return (
    <div className="nav-container">
      <NavButton href="/">
        Home
      </NavButton>

      <NavButton href="/word-bank">
        Word Bank
      </NavButton>

      <NavButton href="/practice">
        Practice
      </NavButton>

      <NavButton href="/profile">
        My profile
      </NavButton>
    </div>
  )
};

export default NavBar;