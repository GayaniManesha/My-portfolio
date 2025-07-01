import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { GraduationCapIcon, AwardIcon, BookOpenIcon } from 'lucide-react';

// Certificate images array
const certificates = [
  {
    title: "Software Development",
    issuer: "Linkedin Learning",
    year: "2025",
    image: "https://i.postimg.cc/gkVfb900/Certificate-Of-Completion-Introduction-to-Career-Skills-in-Software-Development.png",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Simplilearn",
    year: "2025",
    image: "https://i.postimg.cc/6q71mSmB/8523610-88947041750932281161.png",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "https://i.postimg.cc/gJ3xHkYp/introduction-to-modern-ai.png",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "https://i.postimg.cc/4NyJJNr3/image.png",
  },
  {
    title: "Introduction to python",
    issuer: "Solo Learn",
    year: "2025",
    image: "https://i.postimg.cc/sXKvNHZH/1ed282dc-96e9-4e48-b130-5c28cfc3eaf9.png",
  },
  {
    title: "Introduction to C",
    issuer: "Solo Learn",
    year: "2025",
    image: "https://i.postimg.cc/d1z8qtBZ/2fc4dc90-8b98-4ac8-82ee-e5523eaa3f40.png",
  },
  {
    title: "Introduction to Java",
    issuer: "Solo Learn",
    year: "2025",
    image: "https://i.postimg.cc/mDxDkcv4/e8881438-bb56-434b-a35d-aaf1183c61d7-2.png",
  },
];

const About = () => {
  // Modal state for certificate preview
  const [modal, setModal] = React.useState<{ open: boolean; cert?: typeof certificates[0] }>({ open: false });

  return (
    <SectionContainer gradient>
      <SectionHeader title="About Me" subtitle="My background and journey" />
      {/* Professional Summary & Education side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
      {/* Certificates Section - Full width below */}
      <div className="mt-12">
        <div className="relative bg-gradient-to-br from-[#1e293b] via-[#152238] to-[#2563eb] rounded-3xl shadow-2xl border border-blue-900 p-10 hover:scale-[1.01] hover:shadow-cyan-700/40 transition-all duration-300 group overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
              <AwardIcon size={20} />
            </span>
            Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 p-4 rounded-xl border border-blue-900 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 group-hover:border-cyan-400 group-hover:bg-cyan-900/30 transition-all duration-300 shadow hover:scale-[1.04] cursor-pointer"
                onClick={() => setModal({ open: true, cert })}
                title="Click to view larger"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full max-w-xs h-44 object-contain rounded-lg border-2 border-cyan-400 shadow-md transition-transform duration-300 group-hover:scale-105 bg-white"
                />
                <div className="w-full text-center">
                  <h4 className="text-base font-semibold text-white">{cert.title}</h4>
                  <p className="text-cyan-200 text-xs">{cert.issuer}, {cert.year}</p>
                </div>
                <span className="text-xs text-cyan-300 mt-1">Click to enlarge</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for enlarged certificate */}
      {modal.open && modal.cert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModal({ open: false })}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setModal({ open: false })}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modal.cert.image}
              alt={modal.cert.title}
              className="w-full max-h-[70vh] object-contain rounded-lg border-2 border-cyan-400 shadow-md bg-white"
            />
            <div className="mt-4 text-center">
              <h4 className="text-xl font-bold text-gray-800">{modal.cert.title}</h4>
              <p className="text-cyan-700">{modal.cert.issuer}, {modal.cert.year}</p>
            </div>
          </div>
        </div>
      )}
      {/* Decorative background glow */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-gradient-to-br from-cyan-500/10 via-blue-700/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </SectionContainer>
  );
};

export default About;