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

export default ({
  theme = {},
  // swiperProps = {},
  children,
}: {
  theme?: object;
  // swiperProps?: SwiperProps;
  children: ReactNode[];
}) => {
  return (
    <div
      style={{
        ...theme,
        width: "100%",
        height: "100%",
      }}
    >
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
