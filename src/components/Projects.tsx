import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Finance Tracker App',
    description: 'A simple finance tracker app to manage expenses, track income, and stay on top of your budget.',
    image: 'https://i.postimg.cc/W4Qfnq8q/0bb41713571ad487947c810ad18c73d4.jpg',
    tags: ['Kotlin', 'Android Studio'],
    link: 'https://www.linkedin.com/posts/gayani-jayasundara-4293b9361_financeapp-androiddevelopment-kotlin-activity-7342253543174672384-PKZc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFnwLiEBf0cj7mqJHan71aPQxAVlHN5pa6s',
    github: 'https://github.com/GayaniManesha/finance-tracker-app'
  },
  {
    id: 2,
    title: 'My Portfolio',
    description: 'A customizable portfolio template for creative professionals and agencies.',
    image: 'https://i.postimg.cc/d3pV4B7c/Screenshot-2025-06-26-225026.png',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    link: '#',
    github: 'https://github.com/GayaniManesha/My-portfolio'
  },
  {
    id: 3,
    title: 'Baskin Robbins App',
    description: 'The Baskin Robbins app lets you order ice cream, explore flavors, and enjoy exclusive deals easily.',
    image: 'https://i.postimg.cc/nr9gxYLk/edd4995c2c8c90630aa8b68b1f9d5a73.jpg',
    tags: ['Kotlin', 'Android Studio'],
    link: 'https://www.linkedin.com/posts/gayani-jayasundara-4293b9361_androiddevelopment-kotlin-uiuxdesign-activity-7342520318118301697-sqzC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFnwLiEBf0cj7mqJHan71aPQxAVlHN5pa6s',
    github: 'https://github.com/GayaniManesha/BaskinRobbins-App.git'
  },
  {
    id: 4,
    title: 'Travel Ease',
    description: 'Travel Ease is a user-friendly website to explore destinations, read reviews, and plan hassle-free trips.',
    image: 'https://i.postimg.cc/VLJSnSSc/1d152dfd97299c58354997e13d0a3699.jpg',
    tags: ['React', 'Tailwind CSS', 'Java Script'],
    link: 'https://travel-app-gray-eight.vercel.app/',
    github: 'https://github.com/GayaniManesha/TravelApp'
  }
];

const Projects = () => {
  return (
    <SectionContainer dark>
      <SectionHeader title="My Projects" subtitle="Some of my recent work" light />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12">
        {projects.map(project => (
          <div
            key={project.id}
            className="relative bg-gradient-to-br from-blue-900/70 via-gray-900/80 to-cyan-900/70 rounded-3xl p-7 shadow-2xl flex flex-col group hover:scale-[1.03] transition-transform duration-300 border border-blue-800/40 overflow-hidden"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="relative mb-5 z-10">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-48 object-cover shadow-lg group-hover:shadow-cyan-400/40 transition-shadow duration-300 border-2 border-cyan-900/30"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-blue-600/90 text-blue-900 hover:text-white rounded-full p-2 shadow transition border border-blue-200/40"
                    title="Project Demo"
                  >
                    <ExternalLinkIcon size={18} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-gray-900/90 text-gray-900 hover:text-white rounded-full p-2 shadow transition border border-gray-200/40"
                    title="GitHub Code"
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-extrabold mb-2 text-white tracking-tight">{project.title}</h3>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-blue-700 via-cyan-700 to-blue-900 text-cyan-100 rounded-full text-xs font-semibold shadow border border-cyan-800/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Subtle bottom bar for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-800/40 via-cyan-700/30 to-blue-900/40 rounded-b-3xl blur-sm z-0" />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;