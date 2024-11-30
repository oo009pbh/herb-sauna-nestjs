import React from 'react';
import klass from './footer.module.scss';
import { SAUNA } from '@/app/_shared/const';

function Footer() {
  return (
    <footer className={klass.container}>
      <div className={klass.title}>{SAUNA}</div>
      <div className={klass.content}>
        <div className={klass.description}>대표 : 박세범</div>
        <div className={klass.description}>
          주소 : 경기도 양평군 용문면 태남길 47
        </div>
        <div className={klass.description}>
          연락처 : 031-774-2766 / 010-3227-3240
        </div>
        <div className={klass.description}>
          사업자 번호 : 031-774-2766 / 010-3227-3240
        </div>
      </div>
    </footer>
  );
}

export default Footer;
