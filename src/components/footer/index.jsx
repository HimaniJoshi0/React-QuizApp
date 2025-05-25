import React from 'react';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Footer = () => {
  const quickLinks = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Quizzes', to: '/quiz' },
    { title: 'Create Quiz', to: '/quiz/create' },
  ];

  const resourceLinks = [
    { title: 'Documentation', to: '/docs' },
    { title: 'Help Center', to: '/help' },
    { title: 'Terms of Service', to: '/terms' },
    { title: 'Privacy Policy', to: '/privacy' },
  ];

  const renderFooterSection = (title, links) => (
    <div className="text-white/80">
      <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] bg-clip-text text-transparent">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.to}
              className="hover:text-[#00A3FF] transition-colors duration-300"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#0A0F1C] py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A3FF] rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FFB2] rounded-full filter blur-[128px] opacity-20" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="text-white/80">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MenuBookIcon
                className="text-[#00A3FF]"
                sx={{ fontSize: 32 }}
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] bg-clip-text text-transparent">
                QuizApp
              </span>
            </Link>
            <p className="text-sm text-white/60">
              Empower your learning journey with interactive quizzes and real-time assessments.
            </p>
          </div>

          {/* Quick Links */}
          {renderFooterSection('Quick Links', quickLinks)}

          {/* Resources */}
          {renderFooterSection('Resources', resourceLinks)}

          {/* Contact */}
          <div className="text-white/80">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] bg-clip-text text-transparent">
              Contact
            </h3>
            <p className="text-sm text-white/60 mb-2">
              Have questions? Reach out to us.
            </p>
            <a
              href="mailto:support@quizapp.com"
              className="text-[#00A3FF] hover:text-[#00FFB2] transition-colors duration-300"
            >
              support@quizapp.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p className="text-sm">
            © {new Date().getFullYear()} QuizApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
