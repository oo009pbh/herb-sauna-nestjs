import React from 'react';
import klass from './LocationSection.module.scss';
import Title from '@atoms/title';
import NaverMap from '@molecules/NaverMap';

export function LocationSection() {
  return (
    <section className={klass.container}>
      <Title title={'오시는 길'} />
      <div className={klass.content}>
        <NaverMap />
        <div className={klass.description_wrapper}>
          <div className={klass.title}>용문산허브찜질방</div>
          <div className={klass.description}>
            <div className={klass.row}>
              이용시간 : 24시간 운영
              <br />
              (일-금 07:00-23:00 / 토 7:00-24:00 입실 가능)
            </div>
            <div className={klass.row}>
              주소 : 경기도 양평군 용문면 태남길 47
            </div>
            <div className={klass.row}>
              연락처 : 031-774-2766 / 010-3227-3240
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
