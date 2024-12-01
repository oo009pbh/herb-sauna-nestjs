import React from 'react';
import klass from './BlogSection.module.scss';
import Title from '@atoms/title';

export function BlogSection() {
  return (
    <section className={klass.container}>
      <Title title={'이용 후기'} />
    </section>
  );
}
