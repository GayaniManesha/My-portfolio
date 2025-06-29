import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { GraduationCapIcon, AwardIcon, BookOpenIcon } from 'lucide-react';

const About = () => {
  return (
    <SectionContainer gradient>
      <SectionHeader title="About Me" subtitle="My background and journey" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Left Side: Summary & Education */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Professional Summary */}
          <div className="relative bg-gradient-to-br from-[#1e293b] via-[#152238] to-[#2563eb] rounded-3xl shadow-2xl border border-blue-900 p-10 hover:scale-[1.03] hover:shadow-cyan-700/40 transition-all duration-300 group overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <BookOpenIcon size={20} />
              </span>
              Professional Summary
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              I am an Information Technology undergraduate at SLIIT with a keen interest in web designing, UI/UX designing, and mobile app development. I am passionate about creating attractive and user-friendly digital solutions that enhance the overall user experience. My focus lies in developing websites and applications that are not only visually appealing but also functional and easy to navigate, combining creativity with technical skills.
            </p>
            <p className="text-white leading-relaxed">
              With a strong enthusiasm for web development, I continuously strive to improve my knowledge and stay updated with the latest trends and technologies in the field. I am eager to apply my skills to real-world projects, learn from industry professionals, and contribute effectively to innovative and meaningful digital experiences.
            </p>
          </div>
          {/* Education */}
          <div className="relative bg-gradient-to-br from-[#1e293b] via-[#152238] to-[#2563eb] rounded-3xl shadow-2xl border border-blue-900 p-10 hover:scale-[1.03] hover:shadow-cyan-700/40 transition-all duration-300 group overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <GraduationCapIcon size={20} />
              </span>
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-blue-600 hover:border-l-4 transition-all duration-300 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>
                <h4 className="text-lg font-medium text-white">Bachelor of Science Specializing in Information Technology</h4>
                <p className="text-blue-100 mb-1">SLIIT, 2023 - present</p>
                <p className="text-blue-200 text-sm">
                  I'm an undergraduate student pursuing a degree in Information Technology at SLIIT.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600 hover:border-l-4 transition-all duration-300 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>
                <h4 className="text-lg font-medium text-white">School</h4>
                <p className="text-blue-100 mb-1">Bandarawela Central College, 2012 - 2020</p>
                <p className="text-blue-200 text-sm">
                  I completed my secondary education in the Physical Science stream, which helped me build a strong foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side: Certifications & Courses */}
        <div className="flex flex-col gap-8">
          {/* Certifications */}
          <div className="relative bg-gradient-to-br from-[#1e293b] via-[#152238] to-[#2563eb] rounded-3xl shadow-2xl border border-blue-900 p-10 hover:scale-[1.03] hover:shadow-cyan-700/40 transition-all duration-300 group overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <AwardIcon size={20} />
              </span>
              Certifications
            </h3>
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-blue-900 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 group-hover:border-cyan-400 group-hover:bg-cyan-900/30 transition-all duration-300 shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4 text-lg">
                    SD
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Software Development</h4>
                    <p className="text-cyan-200 text-sm">Linkedin Learning, 2025</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-blue-900 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 group-hover:border-cyan-400 group-hover:bg-cyan-900/30 transition-all duration-300 shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4 text-lg">
                    UX
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">UI/UX Design Fundamentals</h4>
                    <p className="text-cyan-200 text-sm">Simplilearn, 2025</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-blue-900 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 group-hover:border-cyan-400 group-hover:bg-cyan-900/30 transition-all duration-300 shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4 text-lg">
                    MA
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Introduction to Modern AI</h4>
                    <p className="text-cyan-200 text-sm">Cisco Networking Academy, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Courses */}
          <div className="relative bg-gradient-to-br from-[#1e293b] via-[#152238] to-[#2563eb] rounded-3xl shadow-2xl border border-blue-900 p-10 hover:scale-[1.03] hover:shadow-cyan-700/40 transition-all duration-300 group overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <BookOpenIcon size={20} />
              </span>
              Courses
            </h3>
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-blue-900 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 group-hover:border-cyan-400 group-hover:bg-cyan-900/30 transition-all duration-300 shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4 text-lg">
                    NB
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Networking Basics</h4>
                    <p className="text-cyan-200 text-sm">Online Platform, 2025</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-blue-900 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 group-hover:border-cyan-400 group-hover:bg-cyan-900/30 transition-all duration-300 shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4 text-lg">
                    RD
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Responsive Web Design</h4>
                    <p className="text-cyan-200 text-sm">Web Academy, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background glow */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-gradient-to-br from-cyan-500/10 via-blue-700/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </SectionContainer>
  );
};

export default About;