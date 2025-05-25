import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "University Student",
      content: "QuizAI has revolutionized my study routine. The AI-generated questions are incredibly relevant and help me understand concepts better.",
      rating: 5,
      avatar: "🎓"
    },
    {
      name: "David Chen",
      role: "High School Teacher",
      content: "As an educator, I'm impressed by the quality and variety of questions. It saves me hours of quiz preparation time.",
      rating: 5,
      avatar: "👨‍🏫"
    },
    {
      name: "Emily Rodriguez",
      role: "Corporate Trainer",
      content: "Perfect for creating engaging assessments for our team training sessions. The customization options are fantastic!",
      rating: 5,
      avatar: "👩‍💼"
    }
  ];

  return (
    <div className="bg-[#0A0F1C] py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#00A3FF] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#00FFB2] opacity-5 blur-[120px] rounded-full" />

      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-20 h-1 bg-gradient-to-r from-[#00A3FF] to-transparent rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-20 h-1 bg-gradient-to-l from-[#00A3FF] to-transparent rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#00A3FF] font-medium tracking-wider uppercase mb-2 animate-fade-in">
            Success Stories
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            What Our Users
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text"> Say</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied users who have transformed their learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00A3FF]/50 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#00A3FF]/10 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex text-[#00A3FF] text-xl">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#00A3FF] mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#00A3FF] mb-2">50K+</div>
            <div className="text-gray-400">Quizzes Generated</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#00A3FF] mb-2">4.9</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-[#00A3FF] mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;