import React from "react";
import { useMemo } from "react";

interface PhotoGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  
  const InstagramFilterSection: React.FC<PhotoGridProps> = ({ images }) => {
    // Shuffle hanya sekali per render (supaya tidak berubah tiap re-render)
    const shuffledImages = useMemo(() => shuffleArray(images), [images]);
  
    return (
      <section id="filter" className="py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-brand-gold text-center">
            Our Moment
          </h2>
        </div>
  
        {/* Portrait Photo Grid - Always 2 columns */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 transition-all duration-300 group cursor-pointer hover:shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
  
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
              {/* Heart Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-white text-4xl">♡</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default InstagramFilterSection;
