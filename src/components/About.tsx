import React from 'react';
import AboutStory from './about/AboutStory';
import AboutMilestones from './about/AboutMilestones';
import AboutApproach from './about/AboutApproach';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 35 years of experience in the building and design industry, we pride ourselves on 
            blending traditional craftsmanship with modern technology.
          </p>
        </div>
        
        <AboutStory />
        <AboutMilestones />
        <AboutApproach />
      </div>
    </section>
  );
};

export default About;