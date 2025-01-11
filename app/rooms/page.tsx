import klass from './rooms.module.scss';
import Title from '@atoms/title';
import React from 'react';

export default function Home() {
  return (
    <main className={klass.container}>
      <Title title={'민박방 안내'} />
    </main>
  );
}
