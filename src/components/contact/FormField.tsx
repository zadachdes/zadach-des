import React from 'react';
import type { FormFieldProps } from '../../types/form';

const FormField = ({ id, name, label, type, required = false, rows = 4 }: FormFieldProps) => {
  const baseClasses = "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default FormField;