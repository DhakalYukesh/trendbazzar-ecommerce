"use client";
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Hero = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    const swiperEl = swiperRef.current;

    // Swiper parameters
    const params = {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    };

    // Assign params to swiper element
    Object.assign(swiperEl, params);

    // Initialize swiper
    swiperEl.initialize();
  }, []);

  return (
    <div>
      <swiper-container init="false" ref={swiperRef} class="swiper-container">
        <swiper-slide> 
          <div className="relative w-full h-[650px]">
            <h3 className='bg-red-300 relative z-3'>Testing</h3>
            <Image src="/images/caro1.webp" alt="Slide 1" fill className="object-cover relative z-6" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="relative w-full h-[650px]">
            <Image src="/images/caro2.avif" alt="Slide 2" fill className="object-cover" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="relative w-full h-[650px]">
            <Image src="/images/caro3.jpg" alt="Slide 3" fill className="object-cover" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Hero;
