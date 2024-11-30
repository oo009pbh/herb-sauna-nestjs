import React from 'react';
import klass from './IntroSection.module.scss';
import Title from '@atoms/title';

function IntroSection() {
  return (
    <section className={klass.container}>
      <Title title={'특별한 점'} />
    </section>
  );
}

export default IntroSection;
