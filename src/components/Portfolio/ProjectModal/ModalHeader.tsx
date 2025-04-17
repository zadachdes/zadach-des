import React from 'react';
import { X } from 'lucide-react';
import type { Project } from '../../../types/portfolio';

interface ModalHeaderProps {
  project: Project;
  onClose: () => void;
}

const ModalHeader = ({ project, onClose }: ModalHeaderProps) => (
  <>
    <div className="absolute right-0 top-0 pr-4 pt-4">
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-500 focus:outline-none"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
    <div className="aspect-w-16 aspect-h-9 mb-6">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover rounded-lg"
      />
    </div>
    <h3 className="text-2xl font-serif leading-6 text-gray-900 mb-4">
      {project.title}
    </h3>
    <div className="mb-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
        {project.category}
      </span>
    </div>
    <p className="text-gray-600 mb-6">{project.description}</p>
  </>
);