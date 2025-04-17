import React from 'react';
import type { Project } from '../../../types/portfolio';
import ModalHeader from './ModalHeader';
import ProjectDetails from './ProjectDetails';
import ModalActions from './ModalActions';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <ModalHeader project={project} onClose={onClose} />
              <ProjectDetails project={project} />
            </div>
          </div>
        </div>
        <ModalActions onClose={onClose} />
      </div>
    </div>
  </div>
);

export default ProjectModal;