export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormField {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  rows?: number;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}