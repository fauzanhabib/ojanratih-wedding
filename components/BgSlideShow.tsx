"use client"
import { useState } from "react";

const images = [
  "/images/slide3.webp",
];

export default function BackgroundSlideshow() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        src="/images/slide3.webp"
        alt="slide"
        loading="eager"
        {...({ fetchpriority: "high" } as any)}
        className="w-full h-full object-cover transition-opacity duration-1000 opacity-50"
      />
      {/* dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  
  );
}
