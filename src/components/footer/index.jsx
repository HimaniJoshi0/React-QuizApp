import React from 'react';
// import { navItems } from '@/lib/data';

const Footer = () => {
  const renderFooterSection = (section, index) => (
    <div key={index} className="text-white">
      <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link, i) => (
          <li key={i}>
            <a href={link.to} className="">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black py-10 border-t mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 text-left">
        {/* {navItems.map(renderFooterSection)} */}
      </div>
    </footer>
  );
};

export default Footer;
