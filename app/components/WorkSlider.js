import React from 'react'
import Circle from './Circle'

export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/1.png',
        },
        {
          title: 'title',
          path: '/2.png',
        },
        {
          title: 'title',
          path: '/3.png',
        },
        {
          title: 'title',
          path: '/4.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/5.png',
        },
        {
          title: 'title',
          path: '/6.png',
        },
        {
          title: 'title',
          path: '/7.png',
        },
        {
          title: 'title',
          path: '/8.png',
        },
      ],
    },
  ],
};

import {  Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    
    pagination={{
      clickable:true,
    }}
    modules={{Pagination}}
    className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide,index)=>{
        return(
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image,index)=>{
                return<div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                  <div className='flex items-center justify-center relative overflow-hidden'>
                    <Image src={image.path} width={500} height={300} alt='.'/>
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#9d0c2e] to-accent opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  </div>
                </div>
              })}
            </div>
          </SwiperSlide>
        );
      })}
      

    </Swiper>
  )
}

export default WorkSlider