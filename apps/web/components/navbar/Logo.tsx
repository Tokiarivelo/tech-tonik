'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { rotateX: 90, opacity: 0, scale: 0.8 },
      {
        rotateX: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
      }
    );
  }, []);

  return (
    <div className="perspective-[1000px]">
      <div
        ref={logoRef}
        className="text-4xl font-extrabold font-mono text-white tracking-wider drop-shadow-[2px_2px_4px_rgba(255,0,255,0.7)] transform-gpu ml-10"
      >
        <span className="text-secondary">The</span>
        <span className="text-white">End</span>
        <span className="text-primary">.page</span>
      </div>
    </div>
  );
};

export default Logo;
