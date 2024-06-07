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
import BlogContent from './BlogContent';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';


export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const response = axios.get('api/blogs')
        const res = response.then(function (data) {
            setBlogs(data.data.slice(0, 5))
            console.log(data.data.slice(0, 5))
            
        })

    }, [])
  return (
    <div className='py-10 '>
      <div className='flex justify-center py-5'>
        <div className='w-3/4 text-center  flex flex-col items-center gap-3'>
          <h1 className='text-xl'>Enhance your knowledge by checking out our latest blog posts</h1>
        </div>
      </div>
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
              <BlogContent  data={blog}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-center py-5'>
          <Button className="flex justify-center gap-2 items-center" asChild>
            <a href='https://blog.all-european-careers.com/'>Read more Blogs <ExternalLinkIcon/></a>
          </Button>
        </div>
      </>
    </div>
  )
}
