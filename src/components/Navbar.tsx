import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Skills',
    path: '/skills'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className={`text-xl font-bold transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600' : 'text-white'}`}>
                Gayani Manesha
              </span>
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`px-1 py-2 text-sm font-medium transition-all duration-200 ${location.pathname === item.path ? scrolled || location.pathname !== '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-white border-b-2 border-white' : scrolled || location.pathname !== '/' ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>
                {item.name}
              </Link>)}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-100' : 'text-white hover:text-white/80 hover:bg-white/10'} focus:outline-none`}>
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md shadow-lg">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
          </div>
        </div>}
    </nav>;
};
export default Navbar;