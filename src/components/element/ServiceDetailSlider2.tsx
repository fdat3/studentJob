'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Swiper as SwiperCore } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const gigImages = [
  '/images/listings/service-details-1.jpg',
  '/images/listings/service-details-1.jpg',
  '/images/listings/service-details-1.jpg',
];

export default function ServiceDetailSlider2() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <div className="scrollbalance-inner">
        <div className="service-single-sldier vam_nav_style slider-1-grid owl-carousel owl-theme mb60 owl-loaded owl-drag">
          <div className="thumb p50 p30-sm">
            {showSwiper && (
              <Swiper
                loop
                spaceBetween={10}
                navigation={{
                  prevEl: '.prev-btn',
                  nextEl: '.next-btn',
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {gigImages.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      height={554}
                      width={929}
                      src={item}
                      alt="gallery"
                      className="w-100 h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <button type="button" className="prev-btn">
            <i className="far fa-arrow-left-long" />
          </button>
          <button type="button" className="next-btn">
            <i className="far fa-arrow-right-long" />
          </button>
          {showSwiper && (
            <Swiper
              onSwiper={setThumbsSwiper}
              loop
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper ui-service-gig-slider-bottom"
            >
              {gigImages.map((item, i) => (
                <SwiperSlide key={i}>
                  <Image
                    height={112}
                    width={150}
                    src={item}
                    alt="image"
                    className="w-100"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
}
