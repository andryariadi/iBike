"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Bikes from "./Bikes";

export default function CarouselPopularBikes({ bikes }) {
  console.log(bikes, "<----dicarouselbikes");

  return (
    <>
      <Swiper>
        {bikes.map((bike) => (
          <SwiperSlide key={bike._id}>
            <Bikes />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
