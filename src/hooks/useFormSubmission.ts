import { useState } from 'react';

export const useFormSubmission = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as any).toString()
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return { status, handleSubmit };
};