"use client";

import Bikes from "./Bikes";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Suspense } from "react";
import SkeletonBike from "./SkeletonBike";

export default function CarouselPopularBikes({ bikes }) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="popular-bike-slider mb-5"
      >
        {bikes.map((bike) => (
          <SwiperSlide key={bike._id}>
            <Suspense fallback={<SkeletonBike />}>
              <Bikes bike={bike} />
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
