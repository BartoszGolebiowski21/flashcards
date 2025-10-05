import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <Link href="/">
        Home
      </Link>

      <Link href="/word-bank">
        Word Bank
      </Link>

      <Link href="/practice">
        Practice
      </Link>

      <Link href="/profile">
        My profile
      </Link>
    </>
  )
};

export default NavBar;