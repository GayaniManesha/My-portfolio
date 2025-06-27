import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              
            </h3>
            <p className="text-indigo-200 mb-6">
             
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-indigo-300 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-indigo-300 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:gayanimanesha@example.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-indigo-300 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <MailIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <div className="space-y-3">
              <p className="text-indigo-200 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Malabe, Sri Lanka
              </p>
              <p className="text-indigo-200 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                gayanimanesha@gmail.com
              </p>
              <p className="text-indigo-200 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                +94 704838268
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-indigo-800/50 mt-12 pt-8 text-center text-indigo-300">
          <p>
            &copy; {new Date().getFullYear()} Gayani Manesha. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;