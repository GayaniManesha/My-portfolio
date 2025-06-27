import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}
interface ProjectCardProps {
  project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  return <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 group">
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-purple-900/40 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-indigo-100 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-200 text-xs font-medium rounded-full">
              {tag}
            </span>)}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-300 hover:text-white transition-colors duration-200">
          View Project <ExternalLinkIcon size={16} className="ml-1" />
        </a>
      </div>
    </div>;
};
export default ProjectCard;