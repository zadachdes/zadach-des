import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ConsultationButton from './common/ConsultationButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif text-gray-900">ZADACH DESIGN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
            <ConsultationButton />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-gray-900">FAQ</a>
            <ConsultationButton fullWidth />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;