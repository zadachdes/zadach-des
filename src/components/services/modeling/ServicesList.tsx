import React from 'react';

const ServicesList = () => (
  <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
    <h4 className="text-xl font-semibold text-gray-900 mb-4">Our 3D Services Include:</h4>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Exterior renderings
      </li>
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Interior visualizations
      </li>
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Virtual walkthroughs
      </li>
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Lighting studies
      </li>
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Material selections
      </li>
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Space planning
      </li>
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Design variations
      </li>
      <li className="flex items-center">
        <span className="mr-2">•</span>
        Construction details
      </li>
    </ul>
  </div>
);

export default ServicesList;