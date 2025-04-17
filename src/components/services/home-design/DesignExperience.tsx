import React from 'react';

const features = [
  {
    title: 'Sustainable Design',
    description: 'We integrate eco-conscious solutions like passive solar design, energy-efficient systems, and sustainable materials to create homes that minimize environmental impact while maximizing comfort and efficiency.'
  },
  {
    title: 'Smart Home Integration',
    description: 'Future-proof your home with integrated automation systems, energy management controls, and smart technologies that enhance comfort, security, and energy efficiency.'
  },
  {
    title: 'Personalized Spaces',
    description: 'Every design decision is thoughtfully crafted to reflect your lifestyle, from custom storage solutions to specialized rooms that serve your unique needs and interests.'
  },
  {
    title: 'Indoor-Outdoor Living',
    description: "Create seamless connections between interior and exterior spaces with carefully planned transitions, natural lighting, and outdoor living areas that extend your home's functionality."
  }
];

const DesignExperience = () => (
  <div>
    <h3 className="text-2xl font-serif text-gray-900 mb-6">Exceptional Design Experience</h3>
    <div className="prose prose-lg text-gray-600 mb-8">
      <p>
        At ZD Design, we believe in creating homes that not only look beautiful but also contribute 
        to a sustainable future. Our comprehensive approach combines architectural expertise with 
        innovative technologies and eco-conscious solutions, ensuring your home is as environmentally 
        responsible as it is stunning.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default DesignExperience;