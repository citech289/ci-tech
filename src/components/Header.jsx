import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// import required modules
import { Navigation } from "swiper/modules";
const Header = () => {
  return (
    // <div
    //   className="min-h-screen mb-4  flex items-center w-full overflow-hidden bg-cover"
    //   style={{ backgroundImage: "url('/Final Logo.jpg')" }}
    //   id="Header"
    // >

    // </div>
    <div className="">
      {/* <img
        src="/powerbi.png"
        alt="Banner"
        className="w-full h-full object-contain lg:mt-5 mt-20"
      /> */}
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Allows autoplay even after user interaction
        }}
        className="mySwiper "
      >
        <SwiperSlide>
          <img
            src="BI.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Data Science Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="All Banners.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Data Science Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Human-R.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Java Full Stack Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Busniness-Analytics.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Business Analyst Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Data-Analyst.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Data Analyst Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Dev-Ops.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="DataScience.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Data-Science"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Java-FSD.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="Java Full Stack Banner"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            src="MERN stack Banner.png"
            className="w-full h-full object-contain lg:mt-5 mt-17"
            alt="MERN Stack Banner"
          />
        </SwiperSlide> */}
      </Swiper>
      
    </div>
  );
};

export default Header;
