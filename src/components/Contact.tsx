import React from 'react';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;