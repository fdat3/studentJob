'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { testimonials } from '@/data/testimonials';

export default function Testimonials12() {
  const [activeItem, setActiveItem] = useState(2);

  const handleClick = (i: number) => {
    // setIsFading(!isFading);
    const testimonialContainer = document.getElementById(
      'testimonialContainer',
    );
    if (testimonialContainer) {
      testimonialContainer.style.animationName = '';
    }
    setActiveItem(i);
    setTimeout(() => {
      if (testimonialContainer) {
        testimonialContainer.style.animationName = 'fade-in-testi';
      }
    }, 1);
  };

  const filteredTestimonials = testimonials.filter(
    (elm) => elm.id == activeItem,
  );
  const currentTestimonial =
    filteredTestimonials.length > 0 ? filteredTestimonials[0] : null;

  return (
    <section className="our-testimonial bdrb1">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-3">
            <div className="testimonial-style2 at-home12 mb30-lg">
              <div className="tab-list position-relative">
                <ul
                  className="nav nav-pills justify-content-md-center"
                  id="pills-tab"
                  role="tablist"
                >
                  {testimonials.map((elm, i) => (
                    <li
                      onClick={() => handleClick(elm.id)}
                      className="nav-item"
                      role="presentation"
                      key={i}
                    >
                      <button
                        className={`nav-link ${
                          activeItem == elm.id ? 'active' : ''
                        } ${!i ? 'ps-0' : ''} `}
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <Image
                          width={70}
                          height={71}
                          objectFit="cover"
                          src={elm.img}
                          alt=" image "
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-8 offset-xl-1">
            <div className="testimonial-style2 at-home12 ">
              <div
                id="testimonialContainer"
                className="animtesti testi-content"
              >
                <span className="icon fas fa-quote-left" />
                <h4 className="testi-text">
                  "
                  {currentTestimonial
                    ? currentTestimonial.comment
                    : 'Default comment'}
                  "
                </h4>
                <h6 className="name">
                  {currentTestimonial
                    ? currentTestimonial.name
                    : 'Default name'}
                </h6>
                <p className="design mb-0">
                  {currentTestimonial
                    ? currentTestimonial.role
                    : 'Default role'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
