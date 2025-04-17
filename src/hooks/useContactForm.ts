import { useState } from 'react';
import type { FormStatus } from '../types/form';

export const useContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return { status, handleSubmit };
};