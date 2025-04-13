'use client';

import klass from './SpecialSection.module.scss';
import Title from '@atoms/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { map, pipe, range, toArray } from '@fxts/core';
import { LeftArrow, RightArrow } from '@atoms/icon';

export function SpecialSection() {
  return (
    <article className={klass.container}>
      <div className={klass.title_wrapper}>
        <div className={klass.description}>용문산허브찜질방만의</div>
        <Title title={'특별한 점'} variant={'white'} />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        className={klass.swiper}
        spaceBetween={0}
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
        {/* TODO: 이미지들 변경하고, 소개글 추가하기 */}
        {pipe(
          range(7),
          map((index) => (
            <SwiperSlide className={klass.slide} key={`special-slide${index}`}>
              <Image
                className={klass.slide_image}
                alt={'예시 이미지'}
                src={'/bg/bg-balcony.webp'}
                fill={true}
              />
            </SwiperSlide>
          )),
          toArray
        )}
      </Swiper>

      <div className={klass.progressbar}></div>

      <div className={klass.navigation}>
        <LeftArrow klass={klass.arrow_icon + ' left'} />
        <RightArrow klass={klass.arrow_icon + ' right'} />
      </div>
    </article>
  );
}
