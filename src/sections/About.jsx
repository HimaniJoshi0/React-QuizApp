import React from 'react';
import Aboutimg from '@/lib/assests/images/about.webp';
import CommonButton from '../components/button';

const Aboutus = () => {
  const learnmoreBtn = () => {
    // Add your handler logic here
    console.log('Learn more button clicked');
  };

  return (
    <div className="px-8 mt-8">
      <h1 className="text-6xl font-bold text-center text-black">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 py-18 gap-8">
        <div className="w-full">
          {/* Replaced Next.js Image with regular img */}
          <img src={Aboutimg} alt="hero section image" className="w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mt-3 text-gray-600">
            Welcome to our AI-powered quiz app — your smart companion for personalized learning and
            self-improvement. Whether you&apos;re a student preparing for exams, a curious mind
            exploring new subjects, or a trivia lover chasing knowledge, our platform uses artificial
            intelligence to generate dynamic, tailored quizzes just for you. With real-time feedback,
            adaptive question sets, and progress tracking, we’re here to make learning efficient,
            engaging, and fun.
          </p>
          <ul className="mt-3 text-gray-600 list-disc list-inside">
            <li>AI-generated quizzes tailored to your learning pace and goals</li>
            <li>Wide range of topics from academics to general knowledge</li>
            <li>Instant feedback and performance tracking</li>
            <li>Dynamic question sets to keep learning fresh and fun</li>
            <li>Perfect for students, professionals, and trivia enthusiasts</li>
          </ul>

          <CommonButton title="Learn More About Us" onClick={learnmoreBtn} classes="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
