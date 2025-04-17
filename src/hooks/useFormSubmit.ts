import { useState } from 'react';
import { submitToNetlify } from '../utils/form/submit';
import { validateForm } from '../utils/form/validation';
import type { FormStatus, FormData } from '../utils/form/types';

export const useFormSubmit = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (formData: FormData) => {
    setStatus('submitting');
    setErrors([]);

    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    try {
      await submitToNetlify(formData);
      setStatus('success');
      return true;
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrors(['Failed to submit form. Please try again.']);
      return false;
    }
  };

  return {
    status,
    errors,
    handleSubmit
  };
};