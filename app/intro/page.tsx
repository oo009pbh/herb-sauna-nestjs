import klass from './intro.module.scss';
import Title from '@atoms/title';
import React from 'react';
import { map, pipe, toArray, values } from '@fxts/core';
import { INTRODUCTIONS } from '@/app/_shared/const';
import ImageBox from '@atoms/ImageBox';

export default function Home() {
  return (
    <main className={klass.container}>
      <Title title={'찜질방 소개'} />

      <div className={klass.content}>
        {pipe(
          INTRODUCTIONS,
          values,
          map(({ title, src }) => (
            <ImageBox title={title} src={src} customKlass={klass.image_box} />
          )),
          toArray
        )}
      </div>
    </main>
  );
}
