import React from "react";
import HeroMid from "../../components/HeroMiddle/HeroMiddle";
import "./Home.scss";
import About from "../../components/AboutUs/About";
import ProjectSection from "../../components/ProjectsSection/ProjectSection";
import TestimonialSlider from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="max-w-7xl m-auto">
      <HeroMid />
      <About />
      <ProjectSection />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
