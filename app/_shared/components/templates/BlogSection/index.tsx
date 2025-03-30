'use client';

import React from 'react';
import klass from './BlogSection.module.scss';
import Title from '@atoms/title';
import BlogCard from '@molecules/BlogCard';
import { BLOGS } from '@/app/_shared/const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { map, pipe, toArray } from '@fxts/core';

export function BlogSection() {
  return (
    <section className={klass.container}>
      <Title title={'이용 후기'} />
      <Swiper
        modules={[Navigation, Pagination]}
        className={klass.swiper}
        spaceBetween={24}
        slidesPerView={'auto'}
        loop={true}
      >
        {pipe(
          BLOGS,
          map((blog) => (
            <SwiperSlide
              className={klass.slide}
              key={blog.title + blog.postdate}
            >
              <BlogCard
                key={blog.title + blog.postdate}
                title={blog.title}
                content={blog.description}
                created_at={blog.postdate}
                link={blog.link}
                user_name={blog.bloggername}
              />
            </SwiperSlide>
          )),
          toArray
        )}
      </Swiper>
    </section>
  );
}
