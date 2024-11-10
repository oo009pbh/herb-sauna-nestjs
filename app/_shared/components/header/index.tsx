import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className='container'>
      <div className='header_item'>소개</div>
      <div className='header_item'>민박</div>
      <div className='header_item'>qna</div>
    </header>
  );
}

export default Header;
