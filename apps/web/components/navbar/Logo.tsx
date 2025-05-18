'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const text = 'TheEnd.Page';

const Logo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const letters = lettersRef.current;
    if (!letters || letters.length === 0) return;


    gsap.fromTo(
      letters,
      {
        y: 80,
        opacity: 0,
        rotateX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'back.out(1.7)',
      }
    );

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      gsap.to(container, {
        rotateY: x,
        rotateX: -y,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };

    const reset = () => {
      gsap.to(container, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', reset);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <div className="perspective-[1200px] ml-10">
      <div
        ref={containerRef}
        className="inline-block transform-gpu origin-center text-5xl font-extrabold font-mono tracking-wide drop-shadow-[4px_4px_6px_rgba(0,0,0,0.5)]"
      >
        {text.split('').map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) lettersRef.current[index] = el;
            }}
            className="inline-block bg-gradient-to-r from-[#e1a134] via-[#e7b057] to-[#cab38f] text-transparent bg-clip-text"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Logo;
