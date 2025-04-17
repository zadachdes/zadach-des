import React from 'react';
import type { DesignFeature } from '../../../types/home-design';

const features: DesignFeature[] = [
  {
    title: 'Personalized Design',
    description: 'Every design is uniquely crafted to reflect your lifestyle and preferences.'
  },
  {
    title: '3D Visualization',
    description: 'Experience your home virtually before construction begins.'
  },
  {
    title: 'Sustainable Design',
    description: 'Eco-friendly solutions that reduce environmental impact.'
  },
  {
    title: 'Smart Integration',
    description: 'Modern home automation and technology integration.'
  }
];

const DesignFeatures = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {features.map((feature, index) => (
      <div key={index} className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
);

export default DesignFeatures;