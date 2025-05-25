import React from "react";
import CommonButton from "../components/button";
import { useNavigate } from "react-router";

const Aboutus = () => {
  const navigate = useNavigate();
  const learnmoreBtn = () => {
    navigate("/features");
    console.log("Learn more button clicked");
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#144d6e7a] opacity-10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-[#00A3FF] opacity-5 blur-[80px] rounded-full" />

      {/* Floating elements */}
      <div className="absolute top-40 right-20 w-20 h-1 bg-gradient-to-r from-[#00A3FF] to-transparent rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-20 h-1 bg-gradient-to-l from-[#00A3FF] to-transparent rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#00A3FF] font-medium tracking-wider uppercase mb-2 animate-fade-in">
            Discover Our Story
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            About{" "}
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text">
              QuizAI
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border border-white/10 group">
              <div className="w-12 h-12 bg-[#00A3FF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00A3FF]/20 transition-all">
                <svg
                  className="w-6 h-6 text-[#00A3FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                AI-Powered
              </h3>
              <p className="text-gray-400 text-sm">
                Smart quizzes tailored to your learning style
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border border-white/10 group">
              <div className="w-12 h-12 bg-[#00A3FF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00A3FF]/20 transition-all">
                <svg
                  className="w-6 h-6 text-[#00A3FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Instant Feedback
              </h3>
              <p className="text-gray-400 text-sm">
                Real-time performance tracking
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border border-white/10 group">
              <div className="w-12 h-12 bg-[#00A3FF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00A3FF]/20 transition-all">
                <svg
                  className="w-6 h-6 text-[#00A3FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Wide Topics
              </h3>
              <p className="text-gray-400 text-sm">
                From academics to general knowledge
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border border-white/10 group">
              <div className="w-12 h-12 bg-[#00A3FF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00A3FF]/20 transition-all">
                <svg
                  className="w-6 h-6 text-[#00A3FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                For Everyone
              </h3>
              <p className="text-gray-400 text-sm">
                Students, professionals & enthusiasts
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-6">
                Welcome to QuizAI — your intelligent companion for personalized
                learning and self-improvement. Our AI-powered platform
                revolutionizes the way you learn and test your knowledge, making
                education more accessible, engaging, and effective than ever
                before.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Whether you're preparing for exams, expanding your knowledge, or
                simply enjoying the thrill of learning, QuizAI adapts to your
                unique needs and learning style.
              </p>
              <CommonButton
                title="Explore More →"
                onclick={learnmoreBtn}
                classes="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00A3FF]/20 font-medium text-lg w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
