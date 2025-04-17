import React from 'react';

interface ModalActionsProps {
  onClose: () => void;
}

const ModalActions = ({ onClose }: ModalActionsProps) => (
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
);