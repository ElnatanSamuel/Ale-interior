import React from "react";
import HeroMid from "../../components/HeroMiddle/HeroMiddle";
import "./Home.scss";
import About from "../../components/AboutUs/About";
import ProjectSection from "../../components/ProjectsSection/ProjectSection";
import PromoVideo from "../../components/PromoVideo/PromoVideo";
import LatestBlog from "../../components/LatestBlog/LatestBlog";
import ParallaxHome from "../../components/Parralax/ParallaxHome";
import Hero from "../../components/Hero/Hero";
// import TestimonialSlider from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <HeroMid />
      <About />
      <ProjectSection />
      <ParallaxHome />
      <LatestBlog />
    </div>
  );
};

export default Home;
