"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import BlogImages from './BlogImages';

export default function BlogContent(props) {
    const blogs = props.blogs
    return (


            <>
                <Swiper
          spaceBetween={30}
          centeredSlides={false}
          slidesPerView={3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          breakpoints={{
            100: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              // spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {blogs?.slice(0, 5).map((blog)=>(
            <SwiperSlide key={blog.key}>
              <BlogImages  data={blog}/>
            </SwiperSlide>
          ))}
        </Swiper>
            </>
    )
}
