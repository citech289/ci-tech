import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
    <div>
      {/* <img
        src="/Final Logo.jpg"
        alt="Banner"
        className="w-full h-full object-contain lg:mt-5 mt-20"
      /> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <img
            src="/All.png"
            alt="Banner"
            className="w-full h-full object-contain lg:mt-5 mt-20"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Data-Science.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Java-Full01.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="BA.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="DA.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="DEVOPS.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="DS.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="JAVA.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="MERN.png"
            className="w-full h-full object-contain lg:mt-5 mt-20"
            alt="Banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
