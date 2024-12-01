import React from 'react';
import klass from './IntroSection.module.scss';
import Title from '@atoms/title';

function IntroSection() {
  return (
    <section className={klass.container}>
      <div className={klass.swiper}>
        <div className={klass.description}>용문산허브찜질방만의</div>
        <Title title={'특별한 점'} variant={'white'} />
      </div>
    </section>
  );
}

export default IntroSection;
