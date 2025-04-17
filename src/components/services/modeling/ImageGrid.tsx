import React from 'react';
import { RenderingImage } from '../../../types/modeling';

interface ImageGridProps {
  images: RenderingImage[];
}

const ImageGrid = ({ images }: ImageGridProps) => (
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
);

export default ImageGrid;