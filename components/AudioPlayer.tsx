// components/AudioPlayer.js
"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to autoplay
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Autoplay started!");
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
          });
      }
    }
  }, []);

  return (
    <audio ref={audioRef} src="/song/It's_you.mp3" loop />
  );
}
