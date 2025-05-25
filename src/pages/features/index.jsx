import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../../components/button'; // Assuming CommonButton is in this path

const FeaturesPage = () => {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/quiz');
  };

  const features = [
    {
      title: "AI-Powered Question Generation",
      description: "Instantly create unique and relevant quiz questions on any topic using advanced AI.",
    },
    {
      title: "Multiple Quiz Formats",
      description: "Generate quizzes in various formats like multiple choice, true/false, and open-ended questions.",
    },
    {
      title: "Customizable Quizzes",
      description: "Easily edit, add, or remove questions to tailor quizzes to your specific needs.",
    },
    {
      title: "Topic Diversity",
      description: "Our AI covers a vast range of subjects, from academic disciplines to niche interests.",
    },
    {
      title: "Fast & Efficient",
      description: "Get your quiz ready in seconds, saving you time and effort.",
    },
    {
      title: "Easy Sharing",
      description: "Share your created quizzes effortlessly with friends, students, or colleagues.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0A0F1C] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#00A3FF]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-[#00A3FF]/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#FF00FF] opacity-10 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#00A3FF] opacity-10 blur-[100px] rounded-full animate-bounce" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
          Powerful Features of <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text">Quiz AI</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          Discover how Quiz AI makes creating engaging quizzes easier and faster than ever.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#00A3FF]/50 transform hover:scale-105 transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <CommonButton
          classes="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00A3FF]/20 font-medium text-lg"
          title="Try Quiz AI Now →"
          onclick={handleTryNowClick}
        />
      </div>
    </div>
  );
};

export default FeaturesPage;