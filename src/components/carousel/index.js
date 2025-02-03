'use client'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';




const ImageCarousel = ({images}) => {
  return (
    <div className='px-10 py-10 items-center justify-center'>
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper">
        {
            images.map((image, index)=> (
                <SwiperSlide key={index}>
                    <Image
                    style={{
                        width: "100%",
                        height: "400px", // ارتفاع ثابت برای همه عکس‌ها
                        objectFit: "contain",
                      }}
                    src={image}
                    alt={`Slide ${index}`}
                    width={800}
                    height={600}
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}

export default ImageCarousel;