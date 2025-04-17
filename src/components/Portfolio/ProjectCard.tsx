import React from 'react';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => (
  <div 
    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition bg-gray-100 cursor-pointer"
    onClick={() => onSelect(project)}
  >
    <div className="relative w-full pt-[75%]">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <div className="text-center text-white p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-200 mb-3">{project.category}</p>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        <button className="px-6 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-gray-900 transition">
          View Details
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;