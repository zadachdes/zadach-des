import React from 'react';
import type { Project } from '../../../types/portfolio';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => (
  <div className="border-t border-gray-200 pt-6">
    <h4 className="text-lg font-semibold mb-4">Project Details</h4>
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <dt className="text-sm font-medium text-gray-500">Location</dt>
        <dd className="mt-1 text-sm text-gray-900">{project.location || 'Available upon request'}</dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-gray-500">Project Type</dt>
        <dd className="mt-1 text-sm text-gray-900">{project.category}</dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-gray-500">Square Footage</dt>
        <dd className="mt-1 text-sm text-gray-900">{project.squareFootage || 'Available upon request'}</dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-gray-500">Completion</dt>
        <dd className="mt-1 text-sm text-gray-900">{project.completionDate || 'Available upon request'}</dd>
      </div>
    </dl>
  </div>
);