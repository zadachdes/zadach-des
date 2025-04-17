import React from 'react';
import { Building2, Compass, Home, Box } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Custom Home Design',
    description: 'Personalized architectural designs that perfectly blend your vision with functional excellence.',
    link: '#custom-home-design'
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: '3D Modeling & Renderings',
    description: 'Immersive 3D visualizations that bring your project to life before construction begins.',
    link: '#modeling-rendering'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'CAD Construction Drawings',
    description: 'Precise technical drawings and documentation ensuring accurate project execution.',
    link: '#construction-drawings'
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: 'Custom Kitchen Design',
    description: 'Expertly crafted kitchen layouts that combine functionality with stunning aesthetics.',
    link: '#kitchen-design'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of services ensures every detail of your project is expertly planned
            and executed—providing clarity, confidence, and breathtaking results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-gray-900 mb-4 group-hover:text-gray-700 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.link}
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;