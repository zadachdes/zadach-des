import type { FormData } from './types';

export const submitToNetlify = async (formData: FormData): Promise<Response> => {
  const data = new FormData();
  
  // Add form identifier
  data.append('form-name', 'contact');
  
  // Add form fields
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, value);
  });

  try {
    const response = await fetch("/", {
      method: "POST",
      body: data
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};