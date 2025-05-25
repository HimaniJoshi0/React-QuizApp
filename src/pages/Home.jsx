import React from "react";
import HeroSection from "../sections/HeroSection";
import About from "../sections/About";
import Characteristics from "../sections/Characteristics";
import Testimonials from "../sections/Testimonials";
import Footer from "../components/footer";
import HowItWorks from "../sections/HowItWorks"; // Import the new component

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <About />
      <Characteristics />
      <HowItWorks /> {/* Add the new section here */}
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
