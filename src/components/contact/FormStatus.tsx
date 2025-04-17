import React from 'react';
import type { FormStatus as FormStatusType } from '../../types/form';

interface FormStatusProps {
  status: FormStatusType;
}

const FormStatus = ({ status }: FormStatusProps) => {
  if (status === 'idle') return null;

  return (
    <div className={`text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
      {status === 'success' 
        ? 'Thank you for your message. We\'ll be in touch soon!'
        : 'There was an error sending your message. Please try again.'}
    </div>
  );
};

export default FormStatus;