import React from 'react';

const AboutApproach = () => (
  <div className="bg-white rounded-lg shadow-sm p-8">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-serif text-gray-900 mb-6">Our Approach Today</h3>
      <p className="text-lg text-gray-600 mb-6">
        About seven years ago, I discovered SketchUp, and it changed everything. The ability to 
        design in 3D amazed me, and I quickly saw the advantages of drawing buildings exactly 
        how they'd be built. This approach not only enhances the accuracy of my designs but 
        also saves clients time and money.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        With over 35 years of experience in the building and design industry, I pride myself on 
        blending traditional craftsmanship with modern technology. At ZD, we ensure every project 
        is completed with precision, passion, and an eye for detail. Whether you're looking to 
        build your dream home or need expert design services, we're here to make your vision a reality.
      </p>
      <div className="text-center">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
          Start Your Project
        </button>
      </div>
    </div>
  </div>
);

export default AboutApproach;