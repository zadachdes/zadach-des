import React from 'react';
import type { HomeDesignProject } from '../../../types/home-design';

interface ProjectShowcaseProps {
  projects: HomeDesignProject[];
}

const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
      >
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={project.url}
            alt={project.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
            <h4 className="text-lg text-gray-300 mb-3">{project.subtitle}</h4>
            <p className="text-sm text-gray-200">{project.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectShowcase;