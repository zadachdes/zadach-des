import React from 'react';

const AboutStory = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alt="Craftsmanship and woodworking"
        className="rounded-lg shadow-lg w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
    </div>
    
    <div>
      <h3 className="text-2xl font-serif text-gray-900 mb-6">The Foundation</h3>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">
          My journey with wood began as a child in my uncle's cabinet shop. The rich scent of 
          freshly cut timber and the satisfaction of craftsmanship were always present, and it's 
          where I first learned the basics—like how to sand and pay attention to the small 
          details that make a big difference. I spent countless hours in that shop, making 
          skateboard planks and small projects, learning the value of hard work and creativity.
        </p>
        <p className="mb-4">
          Another uncle, a builder and framer, shaped my path further. Working with him during 
          the summers was an absolute blast, and those experiences cemented my desire to enter 
          the construction world. By my early twenties, I became a framing contractor, building 
          custom stick-built homes in some of the most prestigious developments.
        </p>
        <p>
          In the early '90s, my career expanded into design. I started with a drafting table 
          and an electric eraser, creating custom home designs for builders. In 1992, I bought 
          my first computer and began learning CAD. I still have every house I've drawn since 
          1993, each one a testament to how my building experience informs my designs—if you 
          can't build it, you can't draw it.
        </p>
      </div>
    </div>
  </div>
);

export default AboutStory;