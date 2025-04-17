import React from 'react';
import ServicesList from './modeling/ServicesList';
import BenefitsList from './modeling/BenefitsList';
import ImageGrid from './modeling/ImageGrid';
import type { RenderingImage } from '../../types/modeling';

const ModelingRendering = () => {
  const images: RenderingImage[] = [
    {
      url: 'https://i.postimg.cc/3W5d8mnL/arch-viz.png',
      alt: '3D architectural visualization'
    },
    {
      url: 'https://i.postimg.cc/zftwJ2W0/kitchen-family.png',
      alt: 'Kitchen and family room visualization'
    },
    {
      url: 'https://i.postimg.cc/RF2ct3gt/architectural-visualization.png',
      alt: 'Detailed architectural rendering'
    },
    {
      url: 'https://i.postimg.cc/sfZPrc24/coulter.png',
      alt: 'Coulter residence visualization'
    },
    {
      url: 'https://i.postimg.cc/QMy5L9Gz/section-3.jpg',
      alt: '3D sectional view'
    },
    {
      url: 'https://i.postimg.cc/tJ0xTKgt/knitting-needles.png',
      alt: 'Detailed interior rendering'
    }
  ];

  return (
    <section id="modeling-rendering" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">3D Modeling & Renderings</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience your space before it's built with our photorealistic 3D visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Visualize Your Dream Space</h3>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                At ZD Design, we utilize cutting-edge 3D design technology to transform your vision 
                into reality with exceptional detail and precision. Our comprehensive 3D design and 
                modeling services provide an immersive and interactive experience, allowing you to 
                visualize every aspect of your home from multiple angles.
              </p>
              <p className="mb-6">
                This approach helps you better understand the layout and functionality, ensuring 
                that the spatial relationships and design elements align perfectly with your vision. 
                By exploring your home in three dimensions, you can identify potential design issues 
                early, make informed adjustments, and ensure a smooth construction process.
              </p>
              <p>
                This innovative 3D design service brings your dream home to life with unmatched 
                clarity and confidence.
              </p>
            </div>
            <ServicesList />
          </div>

          <div className="space-y-6">
            <ImageGrid images={images} />
            <BenefitsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelingRendering;