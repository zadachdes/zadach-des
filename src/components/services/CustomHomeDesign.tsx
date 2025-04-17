import React from 'react';
import ProjectShowcase from './home-design/ProjectShowcase';
import DesignExperience from './home-design/DesignExperience';
import DesignProcess from './home-design/DesignProcess';
import type { HomeDesignProject } from '../../types/home-design';

const showcaseProjects: HomeDesignProject[] = [
  {
    url: 'https://i.postimg.cc/mD78rvMY/Wong-front-elevation.jpg',
    alt: 'Modern custom home front elevation',
    title: 'Modern Elegance',
    subtitle: 'Contemporary Estate',
    description: 'A sleek 4,500 sq ft residence with clean lines, open spaces, and a seamless connection to the outdoors.'
  },
  {
    url: 'https://i.postimg.cc/d0HfzB0K/north-georgia.png',
    alt: 'Mountain estate design',
    title: 'Mountain Majesty',
    subtitle: 'Mountain Retreat',
    description: 'A luxurious 6,000 sq ft mountain home featuring panoramic views and exquisite craftsmanship.'
  },
  {
    url: 'https://i.postimg.cc/TwKsGDy5/st-augustine-beach.png',
    alt: 'Coastal home design',
    title: 'Coastal Charm',
    subtitle: 'Coastal Villa',
    description: 'A modern 3,800 sq ft beach house designed for indoor-outdoor living and relaxation by the sea.'
  },
  {
    url: 'https://i.postimg.cc/qRW57vnb/classical-home.png',
    alt: 'Classical home design',
    title: 'Timeless Tradition',
    subtitle: 'Heritage Manor',
    description: 'A 5,200 sq ft estate that exudes timeless elegance with its traditional design elements.'
  },
  {
    url: 'https://i.postimg.cc/DfbNM1kt/classical.png',
    alt: 'Classical architecture',
    title: 'Classical Grandeur',
    subtitle: 'Classical Estate',
    description: 'A stately 7,000 sq ft residence with impeccable classical proportions and a commanding presence.'
  },
  {
    url: 'https://i.postimg.cc/CLT2Tdwd/myrtle-beach-interior.png',
    alt: 'Luxury interior design',
    title: 'Oceanfront Sophistication',
    subtitle: 'Oceanfront Residence',
    description: 'A contemporary 4,200 sq ft coastal home designed to embrace breathtaking ocean views.'
  }
];

const CustomHomeDesign = () => {
  return (
    <section id="custom-home-design" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Custom Home Design</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we create distinctive custom homes that reflect your unique style
            and exceed your expectations.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-8 text-center">
              Showcase of Distinctive Designs
            </h3>
            <ProjectShowcase projects={showcaseProjects} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <DesignExperience />
            <div className="space-y-8">
              <DesignProcess />
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to Begin?</h4>
                <p className="text-gray-600 mb-6">
                  Your dream home starts here. Schedule a consultation today, and let us turn your vision into reality.
                </p>
                <a 
                  href="#contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHomeDesign;