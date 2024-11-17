import React from 'react';
import klass from './TopSection.module.scss';
import Image from 'next/image';

function TopSection() {
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
      <div className={klass.bg_right}></div>
      <div className={klass.title_wrapper}>
        <div className={klass.title}>용문산허브찜질방</div>
        <div className={klass.description}>
          자연 속에 있는 찜질방,
          <br />
          허브스팀으로 향기로운 찜질을 경험을 해보세요.
        </div>
      </div>
    </section>
  );
}

export default TopSection;
