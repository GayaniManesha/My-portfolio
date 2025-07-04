import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { CheckCircle2 } from 'lucide-react';

// Import icons from react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const getBarGradient = (level: number) => {
  // Dynamic gradient based on skill level
  if (level >= 85) {
    // High skill: cyan to emerald
    return 'bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-400';
  } else if (level >= 70) {
    // Medium-high: blue to cyan
    return 'bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-600';
  } else if (level >= 60) {
    // Medium: purple to blue
    return 'bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400';
  } else {
    // Low: rose to orange
    return 'bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-300';
  }
};

const SkillCategory = ({ category }) => (
  <div className="relative bg-gradient-to-br from-[#1e293b] via-[#152238] to-[#2563eb] rounded-3xl shadow-2xl border border-blue-900 p-10 hover:scale-[1.04] hover:shadow-cyan-700/50 transition-all duration-300 group overflow-hidden">
    {/* Decorative Glow */}
    <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
    <div className="flex items-center mb-8">
      <span className="text-4xl mr-4 drop-shadow-lg animate-bounce-slow">{category.icon}</span>
      <h3 className="text-2xl font-extrabold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
        {category.title}
      </h3>
    </div>
    <ul className="space-y-7">
      {category.skills.map((skill, idx) => (
        <li key={idx}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold flex items-center gap-2 text-lg">
              {skill.icon && <span className="text-2xl">{skill.icon}</span>}
              {skill.name}
            </span>
            <span className="text-cyan-200 text-sm font-bold">{skill.level}%</span>
          </div>
          <div className="w-full bg-blue-900/50 rounded-full h-4 shadow-inner overflow-hidden">
            <div
              className={`${getBarGradient(skill.level)} h-4 rounded-full transition-all duration-700 shadow-lg animate-skillbar relative`}
              style={{ width: `${skill.level}%` }}
            >
              {/* Animated stripes overlay */}
              <div className="absolute inset-0 rounded-full opacity-30 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.15)_0_8px,transparent_8px_16px)] animate-move-stripes pointer-events-none"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// Add these animations to your global CSS (index.css or tailwind.css):
// .animate-bounce-slow { animation: bounce 2.5s infinite; }
// .animate-skillbar { animation: skillbarGrow 1.2s cubic-bezier(.4,0,.2,1); }
// .animate-move-stripes { animation: moveStripes 2s linear infinite; }
// @keyframes skillbarGrow { from { width: 0; } to { width: var(--tw-width); } }
// @keyframes moveStripes { 100% { background-position: 40px 0; } }

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <FaReact className="text-cyan-400" />,
      skills: [
        { name: 'HTML', level: 90, icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', level: 80, icon: <FaJs className="text-yellow-400" /> },
        { name: 'React', level: 75, icon: <FaReact className="text-cyan-400" /> },
        { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-cyan-500" /> }
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: <FaNodeJs className="text-green-500" />,
      skills: [
        { name: 'Node.js', level: 70, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express', level: 65, icon: <SiExpress className="text-gray-300" /> },
        { name: 'MongoDB', level: 60, icon: <SiMongodb className="text-green-400" /> },
        { name: 'SQL', level: 65, icon: <GrMysql className="text-blue-400" /> }
      ]
    },
    {
      id: 3,
      title: 'Design',
      icon: <FaFigma className="text-pink-400" />,
      skills: [
        { name: 'UI/UX Design', level: 85, icon: <FaFigma className="text-pink-400" /> },
        { name: 'Figma', level: 80, icon: <FaFigma className="text-pink-400" /> }
      ]
    },
    {
      id: 4,
      title: 'Other Skills',
      icon: <FaGithub className="text-gray-300" />,
      skills: [
        { name: 'GitHub', level: 60, icon: <FaGithub className="text-gray-300" /> },
        { name: 'Web Performance', level: 65, icon: <CheckCircle2 className="text-cyan-400" /> }
      ]
    }
  ];

  return (
    <SectionContainer gradient>
      <SectionHeader title="My Skills" subtitle="Technologies and tools I work with" />
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {skillCategories.map(category => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
      {/* Decorative background glow */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-gradient-to-br from-cyan-500/10 via-blue-700/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </SectionContainer>
  );
};

export default Skills;