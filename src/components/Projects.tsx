import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import ProjectCard from './common/ProjectCard';
const Projects = () => {
  const projects = [{
    id: 1,
    title: 'Finance Tracker App',
    description: 'A simple finance tracker app to manage expenses, track income, and stay on top of your budget.',
    image: 'https://i.postimg.cc/W4Qfnq8q/0bb41713571ad487947c810ad18c73d4.jpg',
    tags: ['Kotlin','Android Studio'],
    link: 'https://www.linkedin.com/posts/gayani-jayasundara-4293b9361_financeapp-androiddevelopment-kotlin-activity-7342253543174672384-PKZc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFnwLiEBf0cj7mqJHan71aPQxAVlHN5pa6s'
  }, {
    id: 2,
    title: 'My Portfolio',
    description: 'A customizable portfolio template for creative professionals and agencies.',
    image: 'https://i.postimg.cc/d3pV4B7c/Screenshot-2025-06-26-225026.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    link: '#'
  }, {
    id: 3,
    title: 'Baskin Robbins App',
    description: 'The Baskin Robbins app lets you order ice cream, explore flavors, and enjoy exclusive deals easily.',
    image: 'https://i.postimg.cc/nr9gxYLk/edd4995c2c8c90630aa8b68b1f9d5a73.jpg',
    tags: ['Kotlin', 'Android Studio', ],
    link: 'https://www.linkedin.com/posts/gayani-jayasundara-4293b9361_androiddevelopment-kotlin-uiuxdesign-activity-7342520318118301697-sqzC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFnwLiEBf0cj7mqJHan71aPQxAVlHN5pa6s'
  }, {
    id: 4,
    title: 'Travel Ease',
    description: 'Travel Ease is a user-friendly website to explore destinations, read reviews, and plan hassle-free trips.',
    image: 'https://i.postimg.cc/VLJSnSSc/1d152dfd97299c58354997e13d0a3699.jpg',
    tags: ['React', 'Tailwind CSS', 'Java Script'],
    link: 'https://travel-app-gray-eight.vercel.app/'
  }];
  return <SectionContainer dark>
      <SectionHeader title="My Projects" subtitle="Some of my recent work" light />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </SectionContainer>;
};
export default Projects;