import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { CheckCircle2 } from 'lucide-react';

const SkillCategory = ({ category }) => (
  <div className="relative bg-gradient-to-br from-[#1e293b] via-[#152238] to-[#2563eb] rounded-3xl shadow-2xl border border-blue-900 p-10 hover:scale-[1.03] hover:shadow-cyan-700/40 transition-all duration-300 group overflow-hidden">
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
              <CheckCircle2 className="text-cyan-400 w-5 h-5 drop-shadow animate-pulse" />
              {skill.name}
            </span>
            <span className="text-cyan-200 text-sm font-bold">{skill.level}%</span>
          </div>
          <div className="w-full bg-blue-900/50 rounded-full h-4 shadow-inner">
            <div
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 h-4 rounded-full transition-all duration-700 shadow-lg animate-skillbar"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// Add custom animation classes in your global CSS (e.g., tailwind.config.js or index.css):
// .animate-bounce-slow { animation: bounce 2.5s infinite; }
// .animate-skillbar { animation: skillbarGrow 1.2s cubic-bezier(.4,0,.2,1); }
// @keyframes skillbarGrow { from { width: 0; } to { width: var(--tw-width); } }

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'MongoDB', level: 60 },
        { name: 'SQL', level: 65 }
      ]
    },
    {
      id: 3,
      title: 'Design',
      icon: '🎭',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 80 }
      ]
    },
    {
      id: 4,
      title: 'Other Skills',
      icon: '🔧',
      skills: [
        { name: 'GitHub', level: 60 },
        { name: 'Web Performance', level: 65 }
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