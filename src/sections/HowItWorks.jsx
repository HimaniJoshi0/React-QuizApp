import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full bg-[#0A0F1C] relative px-4 py-20 md:px-8 overflow-hidden">
      {/* Background elements similar to HeroSection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#144d6e7a] opacity-15 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] bg-[#00A3FF] opacity-8 blur-[80px] rounded-full animate-bounce" />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <div className="mb-8 text-[#00A3FF] font-medium tracking-wider uppercase animate-fade-in">
          How It Works
        </div>

        <h2 className="text-[36px] md:text-[56px] leading-tight font-bold text-white mb-12 animate-slide-up">
          Generate Quizzes in Three Simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00A3FF]/10">
            <div className="text-4xl font-bold text-[#00A3FF] mb-4">1</div>
            <h3 className="text-xl text-white mb-3 font-semibold">Input Your Topic</h3>
            <p className="text-gray-400 text-sm">Tell our AI what subject or topic you want your quiz to cover.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00A3FF]/10">
            <div className="text-4xl font-bold text-[#00A3FF] mb-4">2</div>
            <h3 className="text-xl text-white mb-3 font-semibold">AI Generates Questions</h3>
            <p className="text-gray-400 text-sm">Our intelligent AI creates unique and relevant questions based on your input.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00A3FF]/10">
            <div className="text-4xl font-bold text-[#00A3FF] mb-4">3</div>
            <h3 className="text-xl text-white mb-3 font-semibold">Play & Share</h3>
            <p className="text-gray-400 text-sm">Review, customize, and share your newly generated quiz with others!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;