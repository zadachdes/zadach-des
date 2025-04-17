import React from 'react';
import ConsultationButton from './common/ConsultationButton';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/mD78rvMY/Wong-front-elevation.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Crafting Luxury Homes with Timeless Elegance
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Where architectural excellence meets your distinctive vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition"
            >
              View Our Portfolio
            </a>
            <ConsultationButton variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;