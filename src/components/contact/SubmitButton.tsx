import React from 'react';
import type { FormStatus } from '../../types/form';

interface SubmitButtonProps {
  status: FormStatus;
}

const SubmitButton = ({ status }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={status === 'submitting'}
    className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
  >
    {status === 'submitting' ? 'Sending...' : 'Send Message'}
  </button>
);

export default SubmitButton;