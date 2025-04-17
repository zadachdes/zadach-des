import React from 'react';

const ConstructionDrawings = () => {
  const images = [
    {
      url: 'https://i.postimg.cc/J44Fxvxz/binit-sheet-2.jpg',
      alt: 'Detailed construction drawing sheet'
    },
    {
      url: 'https://i.postimg.cc/Y08skzr7/binit-sheet-4.jpg',
      alt: 'Construction specifications and details'
    },
    {
      url: 'https://i.postimg.cc/3NWg4XjY/floor-plan-E.png',
      alt: 'Residential floor plan'
    },
    {
      url: 'https://i.postimg.cc/X7Rwqyr6/front-elevation-E.png',
      alt: 'Front elevation drawing'
    },
    {
      url: 'https://i.postimg.cc/cLffn43g/herb-french-front.png',
      alt: 'French style home elevation'
    }
  ];

  return (
    <section id="construction-drawings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">CAD Construction Drawings</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional construction documentation with precise details and specifications for seamless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">The Foundation of Success</h3>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                At ZD Design, our 2D design services form the foundation of every successful project, 
                ensuring meticulous attention to detail and precision. Our comprehensive CAD construction 
                drawings provide detailed and accurate representations of your design, including floor plans, 
                elevations, sections, and construction notes.
              </p>
              <p className="mb-6">
                These drawings ensure your project meets all regulatory requirements and is built to the 
                highest standards. Our 2D designs offer accuracy, clarity, regulatory compliance, and 
                cost-effective planning, which are appreciated by builders, subcontractors, building 
                departments, and homeowners.
              </p>
              <p className="mb-6">
                Whether you're planning a new custom home or remodeling an existing space, our 2D design 
                services are tailored to meet your specific needs, combining traditional drafting techniques 
                with the latest CAD technology.
              </p>
              <p>
                With over 35 years of experience, our team delivers 2D designs that are both functional 
                and aesthetically pleasing, serving as the roadmap for your project.
              </p>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Drawing Sets Include:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Floor plans and layouts
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Exterior elevations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Foundation plans
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Framing details
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Section drawings
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Construction notes
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Site plans
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Detail drawings
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={`${
                    index === images.length - 1 && images.length % 2 !== 0 
                      ? 'col-span-2' 
                      : ''
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="rounded-lg shadow-lg w-full h-auto object-cover hover:opacity-90 transition"
                  />
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Why Choose Our CAD Services?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>35+ years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Traditional drafting expertise with modern CAD technology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comprehensive drawing sets for seamless construction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Full regulatory compliance and building department approval</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionDrawings;