"use client";

import Bikes from "./Bikes";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function CarouselPopularBikes({ bikes }) {
  return (
    <>
      <Swiper>
        {bikes.map((bike) => (
          <SwiperSlide key={bike._id}>
            <Bikes bike={bike} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
