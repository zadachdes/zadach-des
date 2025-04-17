import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Initial Consultation',
    description: 'We listen to your vision, discuss your requirements, and establish project goals.'
  },
  {
    number: 2,
    title: 'Concept Development',
    description: 'Preliminary designs and immersive 3D visualizations bring your ideas to life.'
  },
  {
    number: 3,
    title: 'Design Refinement',
    description: 'Your feedback shapes the details as we refine the design to perfection.'
  },
  {
    number: 4,
    title: 'Final Documentation',
    description: 'Comprehensive construction documents and specifications ensure a seamless building process.'
  }
];

const DesignProcess = () => (
  <div className="bg-gray-900 text-white p-8 rounded-lg">
    <h4 className="text-xl font-semibold mb-6">Our Design Process</h4>
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center font-semibold mr-4">
            {step.number}
          </div>
          <div>
            <h5 className="font-semibold mb-1">{step.title}</h5>
            <p className="text-gray-300">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DesignProcess;