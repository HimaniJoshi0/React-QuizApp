import React from 'react';
import CommonButton from '../components/button';

const HeroSection = () => {
  const getstarted = () => {
    console.log("onclick");
  };

  return (
    <div
      className="py-18 px-8"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #70ACD4, #9BBCEE, #A8CAE8, #4882E6, #245595, #70ACD4)',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="bg-white/20 p-1 w-fit rounded-full px-5">
          <span className="text-white">Quizbot.ai </span>The only AI Question Generator
        </span>
        <h1 className="text-6xl font-bold w-100 text-center text-white">
          Matching Questions
        </h1>
        <p className="mt-3 text-gray-600 w-100 text-center text-white/70">
          Quizbot is a sophisticated artificial intelligence-powered question
          generator meticulously engineered to transform and optimize question
          and exam creation processes.
        </p>
        <CommonButton
          classes="mt-3 bg-gray-700 border-2 border-white p-2 rounded-md"
          title="Try 40 questions for free"
          onclick={getstarted}
        />
        <span className="text-white/70 font-bold">No credit card needed!</span>
      </div>
    </div>
  );
};

export default HeroSection;
