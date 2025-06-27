import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { GraduationCapIcon, AwardIcon, BookOpenIcon } from 'lucide-react';
const About = () => {
  return<SectionContainer gradient>
      <SectionHeader title="About Me" subtitle="My background and journey" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-[#152238] via-[#1e293b] to-[#2563eb] rounded-xl shadow-sm border border-blue-900 p-8 mb-8 hover:shadow-md transition-all duration-300">
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
            <div className="bg-gradient-to-br from-[#152238] via-[#1e293b] to-[#2563eb] rounded-xl shadow-sm border border-blue-900 p-8 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <GraduationCapIcon size={20} />
              </span>
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-blue-600 hover:border-l-3 transition-all duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h4 className="text-lg font-medium text-gray-800">
                  Bachelor of Science Specializing in Information Technology
                </h4>
                <p className="text-white mb-1">SLIIT, 2023 - present</p>
                <p className="text-white text-sm">
                 I'm an undergraduate student pursuing a degree in Information Technology at SLIIT.


                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600 hover:border-l-3 transition-all duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h4 className="text-lg font-medium text-gray-800">
                  School
                </h4>
                <p className="text-white mb-1">Bandarawela Central College, 2012 - 2020</p>
                <p className="text-white text-sm">
                  I completed my secondary education in the Physical Science stream, which helped me build a strong foundation.


                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-[#152238] via-[#1e293b] to-[#2563eb] rounded-xl shadow-sm border border-blue-900 p-8 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <AwardIcon size={20} />
              </span>
              Certifications
            </h3>
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-gray-100 bg-gray-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4">
                    SD
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Software Development
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Linkedin Learning, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-gray-100 bg-gray-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4">
                    UX
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      UI/UX Design Fundamentals
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Simplilearn, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-gray-100 bg-gray-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4">
                    MA
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Intoduction to Modern AI
                    </h4>
                    <p className="text-gray-500 text-sm">Cisco Networking Academy, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#152238] via-[#1e293b] to-[#2563eb] rounded-xl shadow-sm border border-blue-900 p-8 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <BookOpenIcon size={20} />
              </span>
              Courses
            </h3>
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-gray-100 bg-gray-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4">
                    NB
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Networking Basics
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Online Platform, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center p-4 rounded-lg border border-gray-100 bg-gray-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm mr-4">
                    RD
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Responsive Web Design
                    </h4>
                    <p className="text-gray-500 text-sm">Web Academy, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>;
};
export default About;