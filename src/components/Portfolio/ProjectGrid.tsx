import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../../types/portfolio';

interface ProjectGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const ProjectGrid = ({ projects, onProjectSelect }: ProjectGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
        onSelect={onProjectSelect}
      />
    ))}
  </div>
);

export default ProjectGrid;