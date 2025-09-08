'use client'

import React, { Children, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, A11y } from 'swiper/modules'

type Props = {
  children: ReactNode
  swiperClassName?: string
  swiperSlideClassName?: string
}

function Slider({ children, swiperClassName, swiperSlideClassName }: Props) {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      slidesPerView="auto"
      modules={[Navigation, A11y]}
      className={swiperClassName}
    >
      {Children.toArray(children).map((item: any) => {
        return (
          <SwiperSlide
            className={swiperSlideClassName}
            key={item.key}
          >
            {item}
          </SwiperSlide>
        )
      })}
      {Children.toArray(children).map((item: any) => {
        return (
          <SwiperSlide
            className={swiperSlideClassName}
            key={item.key}
          >
            {item}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider
