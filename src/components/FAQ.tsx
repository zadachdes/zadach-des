import React from 'react';
import FAQSection from './faq/FAQSection';
import { faqData } from '../data/faqData';

const FAQ = () => {
  const [openItems, setOpenItems] = React.useState<{[key: string]: boolean}>({});

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our design process, requirements, and services.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((section, sectionIndex) => (
            <FAQSection
              key={sectionIndex}
              section={section}
              sectionIndex={sectionIndex}
              openItems={openItems}
              onToggleItem={(itemIndex) => toggleItem(sectionIndex, itemIndex)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Have more questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;