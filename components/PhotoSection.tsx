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
        <div className="grid grid-cols-3 gap-2 max-w-4xl mx-auto mb-8">
          {/* Semua kecuali 2 terakhir */}
          {shuffledImages.slice(0, -2).map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer hover:shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                {...({ fetchpriority: "high" } as any)}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}

          {/* Dua terakhir ditaruh di tengah */}
          <div className="col-span-3 flex justify-center gap-2">
            {shuffledImages.slice(-2).map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] w-1/3 rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer hover:shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  {...({ fetchpriority: "high" } as any)}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </section>
    );
  };

export default InstagramFilterSection;
