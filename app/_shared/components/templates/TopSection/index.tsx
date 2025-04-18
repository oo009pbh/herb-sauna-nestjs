import React from 'react';
import klass from './TopSection.module.scss';
import Image from 'next/image';
import { MainLeaf, MainLeafBg } from '@atoms/icon';

export function TopSection() {
  return (
    <section className={klass.container}>
      <div className={klass.bg_left}>
        <Image
          alt={'왼쪽 잎'}
          className={klass.bg_left_image}
          src={'/bg/bg-leaf-left.webp'}
          width={550}
          height={559}
        />
      </div>

      <div className={klass.bg_right}>
        <Image
          alt={'오른쪽 잎'}
          className={klass.bg_right_image}
          src={'/bg/bg-leaf-right.webp'}
          width={544}
          height={605}
        />
      </div>
      <div className={klass.title_wrapper}>
        <div className={klass.title}>용문산허브찜질방</div>
        <div className={klass.description}>
          자연 속에 있는 찜질방,
          <br />
          허브스팀으로 향기로운 찜질을 경험을 해보세요.
        </div>
      </div>
      <div className={klass.leaf_bg}>
        <MainLeafBg klass={klass.main_leaf_bg} />
        <MainLeaf klass={klass.main_leaf} imageUrl={'/bg/bg-main.webp'} />
      </div>
    </section>
  );
}
