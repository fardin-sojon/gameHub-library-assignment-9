import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pubgImg from "../../assets/pubg-banner.jpg"
import freefireImg from "../../assets/free-fire-banner.jpg"
import callofdutyImg from "../../assets/callofduty-banner.jpg"

const MySwiper = () => {
  return (

    <div className="mt-20">
     <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide>
        <img
          src={freefireImg}
          alt="Freefire Banner"
          className="w-full md:h-[550px] object-cover rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={pubgImg}
          alt="PUBG Banner"
          className="w-full md:h-[550px] object-cover rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={callofdutyImg}
          alt="CallOfDuty Banner"
          className="w-full md:h-[550px] object-cover rounded-md"
        />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default MySwiper;