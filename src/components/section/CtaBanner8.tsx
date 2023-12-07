'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import FsLightbox from 'fslightbox-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CtaBannerCard1 from '../card/CtaBannerCard1';

export default function CtaBanner8() {
  const [toggler, setToggler] = useState(false);

  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="cta-banner-about2 at-home8-2 mx-auto maxw1700 position-relative pt60-md pb60-md p-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-5 wow fadeInLeft">
              {showSwiper && (
                <Swiper
                  slidesPerView={1}
                  spaceBetween={2}
                  freeMode
                  loop
                  className="mySwiper"
                  navigation={{
                    prevEl: '.btn__prev__014',
                    nextEl: '.btn__next__014',
                  }}
                  pagination={{
                    el: '.swiper__pagination__014',
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination]}
                >
                  {Array(3)
                    .fill(3)
                    .map((_, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <CtaBannerCard1 />
                        </div>
                      </SwiperSlide>
                    ))}
                  <div className="row">
                    <div className="col-auto">
                      <button className="swiper__btn swiper__btn-2 btn__prev__014">
                        <i className="far fa-arrow-left-long" />
                      </button>
                    </div>
                    <div className="col-auto">
                      <div className="swiper__pagination-2 swiper__pagination__014" />
                    </div>
                    <div className="col-auto">
                      <button className="swiper__btn swiper__btn-2 btn__next__014">
                        <i className="far fa-arrow-right-long" />
                      </button>
                    </div>
                  </div>
                </Swiper>
              )}
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-2">
              <div className="video-button-home8 position-relative zi9">
                <div className="d-flex align-items-center justify-content-sm-center">
                  <a
                    onClick={() => setToggler(!toggler)}
                    className="popup-iframe popup-youtube fz60 text-white"
                  >
                    <i className="fa-light fa-circle-play mr15" />
                  </a>
                  <span className="fz16 text-white">Watch Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          height={680}
          width={675}
          className="home8-cta-img2 h-auto"
          src="/images/about/about-11.jpg"
          alt="about"
        />
      </section>
      <FsLightbox
        toggler={toggler}
        sources={['https://www.youtube.com/watch?v=1WdiUn9JaX0']}
      />
    </>
  );
}
