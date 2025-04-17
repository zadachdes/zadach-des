import React, { useState } from 'react';
import { portfolioProjects } from '../../data/portfolioData';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';
import type { Project } from '../../types/portfolio';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of custom designs, each reflecting our commitment to 
            exceptional architecture and attention to detail.
          </p>
        </div>

        <ProjectGrid 
          projects={portfolioProjects}
          onProjectSelect={setSelectedProject}
        />

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;