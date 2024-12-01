import React from 'react';
import klass from './LocationSection.module.scss';
import Title from '@atoms/title';

export function LocationSection() {
  return (
    <section className={klass.container}>
      <Title title={'오시는 길'} />
    </section>
  );
}
