import type { FormData } from './types';

export const validateForm = (data: FormData): string[] => {
  const errors: string[] = [];
  
  if (!data.name?.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (!data.phone?.trim()) {
    errors.push('Phone is required');
  }
  
  if (!data.message?.trim()) {
    errors.push('Message is required');
  }
  
  return errors;
};