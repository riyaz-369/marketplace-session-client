import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from "../../../assets/carousel/carousel1.jpg";
import carousel2 from "../../../assets/carousel/carousel2.jpg";
import carousel3 from "../../../assets/carousel/carousel3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Slide from "./Slide";

const Carousel = () => {
  return (
    <Swiper
      loop={true}
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <Slide image={carousel1} key={1} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={carousel2} key={2} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={carousel3} key={3} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
