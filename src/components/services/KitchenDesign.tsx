import React from 'react';

const KitchenDesign = () => {
  const kitchenStyles = [
    {
      title: 'Modern Kitchens',
      description: 'Clean lines, minimalist design, and cutting-edge materials define modern kitchens. From sleek, handleless cabinets to sophisticated lighting solutions, modern kitchens are all about simplicity and innovation. Our designs incorporate the latest trends, including high-tech appliances, smart storage solutions, and eco-friendly materials.',
      image: 'https://i.postimg.cc/NMxc9TsJ/traditional-style.png'
    },
    {
      title: 'Country Kitchens',
      description: 'Embrace warmth and charm with a country kitchen that combines rustic elegance and timeless appeal. Think natural wood finishes, open shelving, and cozy, inviting spaces. Whether you prefer a farmhouse-inspired layout or a more traditional rustic look, our 3D designs let you choose from a variety of cabinetry, countertops, and flooring options.',
      image: 'https://i.postimg.cc/VvLcj65Y/modern-country.png'
    },
    {
      title: 'Traditional Kitchens',
      description: 'Classic designs never go out of style. Traditional kitchens are characterized by intricate details, rich wood tones, and a focus on craftsmanship. From shaker-style cabinets to ornate moldings, every element of a traditional kitchen exudes elegance. With our custom 3D designs, you can preview everything from cabinetry styles to countertop textures.',
      image: 'https://i.postimg.cc/Zn7zjSy6/sleek-country.png'
    }
  ];

  const additionalImages = [
    {
      url: 'https://i.postimg.cc/zvf9ycPv/rustic-country.webp',
      alt: 'Rustic country kitchen design'
    },
    {
      url: 'https://i.postimg.cc/tCYKy8xm/rustic-style-country-kitchen.webp',
      alt: 'Traditional rustic kitchen style'
    }
  ];

  return (
    <section id="kitchen-design" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Custom Kitchen Design</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Personalized, 3D Experience
          </p>
        </div>

        <div className="mb-16">
          <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
            <p className="mb-8">
              Transform your kitchen into a space that reflects your unique style and meets your practical needs. 
              At Zadach Design, we specialize in creating custom kitchens that blend design, function, and innovation. 
              Our 3D modeling technology allows you to visualize your kitchen in stunning detail before construction 
              even begins. Experience the kitchen of your dreams with an immersive design journey that brings your 
              ideas to life.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif text-gray-900 mb-8 text-center">Explore Different Styles & Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kitchenStyles.map((style, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{style.title}</h4>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Immersive 3D Experience</h3>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                At Zadach Design, we use advanced 3D modeling software to give you a realistic, 
                interactive experience. Walk through your kitchen layout, make changes in real time, 
                and explore different color palettes and textures. Our custom design process allows 
                you to see your vision come to life before committing to construction.
              </p>
              <p>
                This way, you're not just imagining your dream kitchen – you're seeing it in full, 
                vibrant detail.
              </p>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Design Process Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Interactive 3D walkthroughs
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Real-time design changes
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Material visualization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Lighting simulations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Storage planning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Workflow optimization
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className="rounded-lg shadow-lg w-full h-auto object-cover hover:opacity-90 transition"
                />
              ))}
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Let's Build Your Dream Kitchen Together</h4>
              <p className="mb-6">
                Ready to create a kitchen that fits your style and lifestyle? Whether you're drawn to 
                the clean lines of modern design, the cozy charm of a country kitchen, or the timeless 
                beauty of traditional cabinetry, we're here to bring your vision to life.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Start Your Kitchen Design Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenDesign;