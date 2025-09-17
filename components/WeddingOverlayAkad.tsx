// components/WeddingOverlay.tsx
import "../lib/fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
export default function WeddingOverlay() {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
        <h2 className="tracking-widest text-sm md:text-lg">THE WEDDING OF</h2>
        <h1 className="font-italiana text-4xl md:text-6xl mt-2">
          Fauzan & Ratih
        </h1>
        <p className="mt-3 tracking-[0.5em] text-lg md:text-xl">
          05 . 11 . 2025
        </p>
  
        {/* Swipe Up */}
        <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
            <FontAwesomeIcon icon={faAngleDoubleUp} className="text-2xl" />
          <span className="text-sm mt-1">Swipe Up</span>
        </div>
      </div>
    );
  }
  