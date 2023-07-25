import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { stories } from "../../data";
import "./histories.css";

const Histories = () => {
  return (
    <section className="section container">
      <h3 className="section__title">
        Sto<span>ries</span>
      </h3>

      <Swiper
        className="story__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {stories.map(({ id, image, title, description }) => (
          <SwiperSlide className="story__card" key={id}>
            <img src={image} alt="" className="story__img" />
            <h3 className="story__name">{title}</h3>
            <p className="story__desc">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Histories;
