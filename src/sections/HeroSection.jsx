import React from "react";
import CommonButton from "../components/button";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  const getstarted = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen w-full bg-[#0A0F1C] relative flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[600px] md:h-[600px] w-[300px] h-[300px] bg-[#144d6e7a] opacity-20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-[#00A3FF] opacity-10 blur-[90px] rounded-full animate-bounce" />
      <div className="absolute bottom-1/4 left-1/4 w-[150px] h-[150px] bg-[#FF00FF] opacity-10 blur-[70px] rounded-full animate-pulse" />

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-8 h-8 border-2 border-[#00A3FF] rounded-lg rotate-45 animate-spin-slow" />
      <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-[#00A3FF] rounded-full animate-bounce" />
      <div className="absolute top-40 left-[20%] w-4 h-4 bg-[#00A3FF] rounded-full animate-pulse" />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <div className="mb-4 text-[#00A3FF] font-medium tracking-wider uppercase animate-fade-in">
          AI Quiz Generator
        </div>

        <h1 className="text-[48px] md:text-[80px] lg:text-[120px] leading-none font-bold text-primary mb-6 relative animate-slide-up">
          <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text">
            QUIZ
          </span>
          <span className="text-white">AI</span>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#00A3FF] rounded-full animate-ping opacity-75" />
        </h1>

        <div className="bg-white/5 backdrop-blur-sm p-4 md:p-8 -translate-y-8 md:-translate-y-16 rounded-lg mb-6 md:mb-8 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00A3FF]/10">
          <h2 className="text-xl md:text-2xl text-white mb-2 font-semibold">
            Everything You Need To Create The Perfect Quiz
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-[600px] mx-auto">
            Generate intelligent questions and create engaging quizzes with the
            power of AI. Experience the future of quiz creation.
          </p>
        </div>

        <CommonButton
          classes="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00A3FF]/20 font-medium text-lg"
          title="Try 40 questions for free →"
          onclick={getstarted}
        />
      </div>
    </div>
  );
};

export default HeroSection;
