import React from 'react';
import type { HomeDesignImage } from '../../../types/home-design';

interface ProjectGalleryProps {
  images: HomeDesignImage[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {images.map((image, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
      >
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        {(image.title || image.description) && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
            <div>
              {image.title && (
                <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
              )}
              {image.description && (
                <p className="text-sm text-gray-200">{image.description}</p>
              )}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default ProjectGallery;