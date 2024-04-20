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
import { Link } from "react-router-dom";

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
          <div className="carouselcontainer flex justify-center items-center ">
            <img
              src="https://i0.wp.com/chronos-stores.com/wp-content/uploads/2021/02/how-to-choose-artworks-chronos-stores-photo-by-muratellioglu-shutterstock.jpg?fit=1000%2C700&ssl=1"
              alt=""
              className="carouselimg w-full absolute top-0 left-0 z-0"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-50"></div>
            <div className="herodesc z-20 flex flex-col space-y-6 justify-center items-center w-3/4 h-full">
              <h1 className="text-white text-3xl font-bold text-center leading-10 md:text-4xl lg:text-7xl">
                Journey Through Our Creations
              </h1>
              <p className="text-white font-bold  text-xs text-center leading-6 lg:text-lg lg:leading-8 lg:w-1/2">
                Step into a world where imagination meets reality. Explore our
                portfolio and immerse yourself in a gallery of exquisite designs
                crafted to inspire.
              </p>
              <Link to="/services">
                <button className="bg-green-900 font-bold text-xs text-white flex items-center justify-center py-4 px-8 lg:text-lg">
                  Our Portfolio
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="carouselcontainer flex justify-center items-center w-full ">
            <img
              src="https://media.licdn.com/dms/image/D5612AQGxJoxauX-v-w/article-cover_image-shrink_720_1280/0/1697507291673?e=2147483647&v=beta&t=zHfrfSAOfWKgTn9Cv0dXsBjbV187M0FuF7SWVHIUf_s"
              alt=""
              className="carouselimg w-full h-full absolute top-0 z-0"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
            <div className="herodesc z-20 flex flex-col space-y-8 justify-center items-center w-3/4 h-full">
              <h1 className="text-white text-3xl font-bold text-center leading-10 md:text-4xl lg:text-7xl">
                Discover the Art of Timeless Design
              </h1>
              <p className="text-white font-bold  text-xs text-center leading-6 lg:text-lg lg:leading-8 lg:w-1/2">
                Step into a world of inspiration and expertise. Explore our blog
                for expert tips, trends, and stories that breathe life into your
                design journey.
              </p>
              <Link to="/blogs">
                <button className="bg-green-900 font-bold text-xs text-white flex items-center justify-center py-4 px-8 lg:text-lg">
                  Our Blog
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="carouselcontainer flex justify-center items-center w-full ">
            <img
              src="https://foyr.com/learn/wp-content/uploads/2019/01/best-interior-design-tips.jpg"
              alt=""
              className="carouselimg w-full h-full absolute top-0 z-0"
            />
            <div className="w-full h-full bg-black z-10 absolute top-0 opacity-40"></div>
            <div className="herodesc z-20 flex flex-col space-y-8 justify-center items-center w-3/4 h-full">
              <h1 className="text-white text-3xl font-bold text-center leading-10 md:text-4xl lg:text-7xl">
                Let's Create Your Dream Space Together
              </h1>
              <p className="text-white text-xs font-bold text-center leading-6 lg:text-lg lg:leading-8 lg:w-1/2">
                Embark on a journey to redefine luxury and comfort. Our team of
                experts is ready to turn your vision into reality. Contact us
                today and let's start designing your perfect oasis.
              </p>
              <Link to="/contacts">
                <button className="bg-green-900 text-xs font-bold text-white flex items-center justify-center py-4 px-8 lg:text-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroMid;
