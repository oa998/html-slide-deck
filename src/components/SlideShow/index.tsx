// import Swiper core and required modules
import { ReactNode } from "react";
// import { Navigation, Pagination, Scrollbar } from "swiper";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "./SlideShow.scss";

export default ({ children }: { children: ReactNode[] }) => {
  return (
    <div className='hsd-slideshow'>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, type: "fraction" }}
        scrollbar={{ draggable: true }}
        style={{ height: "100%" }}
        {...swiperProps}
      > */}
      {children.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
      {/* </Swiper> */}
    </div>
  );
};
