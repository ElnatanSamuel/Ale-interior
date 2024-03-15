import "./HeroMid.scss";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import NavBar from "../NavbarHome/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
  Parallax,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroMid = () => {
  return (
    <div className="relative">
      <NavBar />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        slidesPerView={1}
        navigation={{ clickable: true }}
        autoplay
        parallax={{ enabled: true }}
        pagination={{ clickable: true, enabled: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="carouselcontainer flex justify-center items-center w-full h-full">
            <img
              src="https://isdi.in/blog/wp-content/uploads/2021/07/Interior-Material-Combinations.jpg"
              alt=""
              className="carouselimg w-full absolute top-0 left-0 z-0"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-50"></div>
            <div className="herodesc z-20 flex flex-col space-y-6 justify-center items-center w-3/4 h-full">
              <h1 className="text-white text-3xl font-bold text-center leading-10 md:text-4xl lg:text-7xl">
                Something Big
              </h1>
              <p className="text-white  text-xs text-center leading-6 lg:text-base lg:leading-8 lg:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur doloribus sit numquam reiciendis facilis dolores nam
                eligendi eaque suscipit quisquam?
              </p>
              <button className="bg-green-900 text-xs text-white flex items-center justify-center py-4 px-8 lg:text-lg">
                Blah Blah
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="carouselcontainer flex justify-center items-center w-full ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUtfBLtgA7t0-_vu2KVTfLCPVlHxiRRQ2EQ&s"
              alt=""
              className="carouselimg w-full h-full absolute top-0 z-0"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
            <div className="herodesc z-20 flex flex-col space-y-8 justify-center items-center w-3/4 h-full">
              <h1 className="text-white text-3xl font-bold text-center leading-10 md:text-4xl lg:text-7xl">
                Another Big Thing
              </h1>
              <p className="text-white  text-xs text-center leading-6 lg:text-base lg:leading-8 lg:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur doloribus sit numquam reiciendis facilis dolores nam
                eligendi eaque suscipit quisquam?
              </p>
              <button className="bg-green-900 text-xs text-white flex items-center justify-center py-4 px-8 lg:text-lg">
                Blah Blah
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="carouselcontainer flex justify-center items-center w-full ">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt=""
              className="carouselimg w-full h-full absolute top-0 z-0"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
            <div className="herodesc z-20 flex flex-col space-y-8 justify-center items-center w-3/4 h-full">
              <h1 className="text-white text-3xl font-bold text-center leading-10 md:text-4xl lg:text-7xl">
                Bigger Than The Last
              </h1>
              <p className="text-white  text-xs text-center leading-6 lg:text-base lg:leading-8 lg:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur doloribus sit numquam reiciendis facilis dolores nam
                eligendi eaque suscipit quisquam?
              </p>
              <button className="bg-green-900 text-xs text-white flex items-center justify-center py-4 px-8 lg:text-lg">
                Blah Blah
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroMid;
