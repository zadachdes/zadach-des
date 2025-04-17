import React from 'react';

const BenefitsList = () => (
  <div className="bg-gray-900 text-white p-8 rounded-lg">
    <h4 className="text-xl font-semibold mb-4">Benefits of 3D Visualization</h4>
    <ul className="space-y-3">
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Make informed design decisions before construction</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Explore multiple design options efficiently</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Identify and resolve potential issues early</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Visualize spaces with realistic materials and lighting</span>
      </li>
    </ul>
  </div>
);

export default BenefitsList;