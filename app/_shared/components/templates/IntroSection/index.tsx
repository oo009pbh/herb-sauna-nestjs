import React from 'react';
import klass from './IntroSection.module.scss';
import { SpecialSection } from '@templates';

export function IntroSection() {
  return (
    <section className={klass.container}>
      <SpecialSection />
    </section>
  );
}
