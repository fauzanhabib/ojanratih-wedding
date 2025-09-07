import { useEffect, useState } from "react";

const images = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
];

export default function BackgroundSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`slide-${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-50" : "opacity-0"
          }`}
        />
      ))}
      {/* dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
