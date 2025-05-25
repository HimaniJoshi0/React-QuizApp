import React from "react";
import HeroSection from "../sections/HeroSection";
import Aboutus from "../sections/About";
import Characteristics from "../sections/Characteristics";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <Characteristics />
      <Testimonials />
    </>
  );
};

export default Home;
