import React from 'react';
import FormField from './FormField';
import FormStatus from './FormStatus';
import SubmitButton from './SubmitButton';
import { useFormSubmission } from '../../hooks/useFormSubmission';

const ContactForm = () => {
  const { status, handleSubmit } = useFormSubmission();

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <FormField
        id="name"
        name="name"
        label="Name"
        type="text"
        required
      />

      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        required
      />

      <FormField
        id="phone"
        name="phone"
        label="Phone"
        type="tel"
        required
      />

      <FormField
        id="message"
        name="message"
        label="Message"
        type="textarea"
        rows={4}
        required
      />

      <FormStatus status={status} />
      <SubmitButton status={status} />
    </form>
  );
};

export default ContactForm;