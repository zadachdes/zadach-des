export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  rows?: number;
}