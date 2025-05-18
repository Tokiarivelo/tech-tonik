"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Loading() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const letters = gsap.utils.toArray(".letter");

    gsap.to(letters, {
      y: -10,
      scale: 1.1,
      rotation: 5,
      duration: 0.6,
      ease: "power1.inOut",
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: -1,
      },
    });
  }, { scope: container });

  const text = "TheEnd.page";

  return (
    <div ref={container} className="relative flex justify-center items-center h-screen w-full bg-white">
      <div className="loading-overlay absolute top-0 left-0 w-full h-full bg-gray-200 mix-blend-overlay transform -translate-x-full" />
      <div className="text-6xl font-extrabold text-black z-10 flex space-x-1">
        {text.split("").map((char, index) => (
          <span key={index} className="letter inline-block">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
