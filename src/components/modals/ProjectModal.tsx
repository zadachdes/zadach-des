import React from 'react';
import { X } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <h3 className="text-2xl font-serif leading-6 text-gray-900 mb-4" id="modal-title">
                  {project.title}
                </h3>
                
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

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
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => window.location.href = '#contact'}
            >
              Inquire About This Design
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;