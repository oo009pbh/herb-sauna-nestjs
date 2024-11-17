import React from 'react';
import klass from './header.module.scss';
import Link from 'next/link';

function Header() {
  return (
    <header className={klass.container}>
      <Link href={'/intro'} className={klass.header_item}>
        소개
      </Link>
      <Link href={'/rooms'} className={klass.header_item}>
        민박
      </Link>
      <Link href={'/qna'} className={klass.header_item}>
        Q&A
      </Link>
    </header>
  );
}

export default Header;
