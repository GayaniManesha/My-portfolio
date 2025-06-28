import React, { useEffect, useState } from 'react';
import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react';
import SocialButton from './common/SocialButton';

const titles = [
  'Web Designer',
  'UI / UX Designer'
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentTitle = titles[titleIndex];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-700/20 backdrop-blur-sm text-blue-100 text-sm font-medium mb-6">
              Gayani Manesha
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              I'm{' '}
              <span className="inline-block min-h-[1em] w-full">
                {currentTitle.split('').map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-letter ${isVisible ? 'animate-show' : 'opacity-0'}`}
                    style={{
                      animationDelay: `${index * 0.13 + 0.3}s`
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h1>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              I'm a passionate web designer and front-end developer with a strong focus on UI/UX design. I enjoy crafting responsive websites and creating intuitive mobile app interfaces that deliver great user experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <SocialButton icon={<GithubIcon size={20} />} label="GitHub" href="https://github.com/GayaniManesha" professional />
              <SocialButton icon={<LinkedinIcon size={20} />} label="LinkedIn" href="https://linkedin.com/in/GayaniJayasundara" professional />
              <SocialButton icon={<DownloadIcon size={20} />} label="Download CV" href="/path-to-your-cv.pdf" primary />
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl group transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/40">
              {/* Animated Glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-400/20 to-transparent blur-2xl opacity-70 z-0 animate-pulse-custom pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 z-10"></div>
              <img
                src="/profile.jpg"
                alt="Gayani Manesha"
                className="w-full h-full object-cover z-20 relative group-hover:scale-105 transition-transform duration-500 shadow-xl"
              />
              {/* Sparkle or highlight */}
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-cyan-300/40 rounded-full blur-xl opacity-80 pointer-events-none animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
    </div>
  );
};

export default Home;