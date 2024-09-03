'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Scrollbar,
  Autoplay,
  EffectCreative,
} from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import React from 'react';

function AdCarousel() {
  const slideData = [
    {
      id: 1,
      imgSrc: '/ad1.png',
    },
    {
      id: 2,
      imgSrc: '/ad2.png',
    },
    {
      id: 3,
      imgSrc: '/ad3.png',
    },
    {
      id: 4,
      imgSrc: '/ad4.png',
    },
    {
      id: 5,
      imgSrc: '/ad5.png',
    },
  ];
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <div className="swiper-container">
      <Swiper
        modules={[EffectCreative]}
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        navigation={false} // prev, next button
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
        speed={1000}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        effect={'creative'}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <Image
                src={slide.imgSrc}
                alt={`slide-${slide.id}`}
                layout="responsive"
                width={350}
                height={75}
                objectFit="cover"
                priority={slide.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AdCarousel;
