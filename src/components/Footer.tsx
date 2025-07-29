import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Socials */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-3 mb-2">
              <a href="https://github.com/gayanimanesha" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-indigo-300 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <GithubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/gayani-jayasundara-4293b9361" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-indigo-300 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:gayanimanesha@gmail.com" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-indigo-300 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <MailIcon size={18} />
              </a>
            </div>
            <span className="text-xs text-indigo-200 mt-1">© {new Date().getFullYear()} Gayani Manesha</span>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-indigo-200 hover:text-white transition-colors duration-200">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-indigo-200 hover:text-white transition-colors duration-200">Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="text-indigo-200 hover:text-white transition-colors duration-200">Skills</Link>
              </li>
              <li>
                <Link to="/contact" className="text-indigo-200 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end text-xs text-indigo-200 space-y-1">
            <span>Malabe, Sri Lanka</span>
            <span>gayanimanesha@gmail.com</span>
            <span>+94 704838268</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;