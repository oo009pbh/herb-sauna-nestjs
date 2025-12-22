'use client';

import klass from './SpecialSection.module.scss';
import Title from '@atoms/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { map, pipe, toArray, zipWithIndex } from '@fxts/core';
import { LeftArrow, RightArrow } from '@atoms/icon';
import { SPECIALS } from '@/app/_shared/const';

export function SpecialSection() {
  return (
    <article className={klass.container}>
      <div className={klass.title_wrapper}>
        <div className={klass.description}>용문산허브찜질방만의</div>
        <Title title={'특별한 점'} variant={'white'} />
      </div>

      <div className={klass.progressbar}></div>

      <Swiper
        modules={[Navigation, Pagination]}
        className={klass.swiper}
        spaceBetween={24}
        slidesPerView={'auto'}
        loop={true}
        pagination={{
          el: `.${klass.progressbar}`,
          type: 'progressbar',
          clickable: true,
          horizontalClass: klass.progressbar,
          renderProgressbar: function (progressbarFillClass) {
            return `
              <span class="${progressbarFillClass} ${klass.progressbar_fill}"></span>
            `;
          },
        }}
        navigation={{
          prevEl: `.${klass.navigation} > .left`,
          nextEl: `.${klass.navigation} > .right`,
        }}
      >
        {pipe(
          SPECIALS,
          zipWithIndex,
          map(([index, { src, title, sub_title }]) => (
            <SwiperSlide className={klass.slide} key={`special-slide-${index}`}>
              <div
                className={klass.slide_image}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 24.12%, rgba(0, 0, 0, 0.80) 109.68%), url(${src})`,
                }}
              >
                <div className={klass.title}>{title}</div>
                <div className={klass.sub_title}>{sub_title}</div>
              </div>
            </SwiperSlide>
          )),
          toArray
        )}
      </Swiper>

      <div className={klass.navigation}>
        <LeftArrow klass={klass.arrow_icon + ' left'} />
        <RightArrow klass={klass.arrow_icon + ' right'} />
      </div>
    </article>
  );
}
