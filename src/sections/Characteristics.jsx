import React from 'react';

const Characteristics = () => {
  const features = [
    {
      title: "Lightning Fast Generation",
      description: "Create comprehensive quizzes in seconds with our advanced AI engine",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: "< 5 sec",
      statsLabel: "Generation Time"
    },
    {
      title: "Smart Adaptation",
      description: "Questions adapt to your knowledge level and learning progress",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: "98%",
      statsLabel: "Accuracy Rate"
    },
    {
      title: "Topic Diversity",
      description: "Covers everything from academic subjects to professional skills",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      stats: "50+",
      statsLabel: "Subject Areas"
    },
    {
      title: "Custom Formatting",
      description: "Multiple choice, true/false, open-ended questions and more",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
      stats: "8",
      statsLabel: "Question Types"
    }
  ];

  return (
    <div className="bg-[#0A0F1C] py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#00A3FF]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-[#00A3FF]/5 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border border-[#00A3FF]/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-[#00A3FF]/20 rounded-full animate-spin-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#00A3FF] font-medium tracking-wider uppercase mb-2 animate-fade-in">
            Why Choose QuizAI
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            Powered by Advanced
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text"> AI Technology</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the next generation of quiz generation with our cutting-edge features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#00A3FF]/50 transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#00A3FF]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#00A3FF]/20 transition-all">
                  <div className="text-[#00A3FF]">{feature.icon}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#00A3FF]">{feature.stats}</div>
                  <div className="text-sm text-gray-400">{feature.statsLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
