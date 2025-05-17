'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { rotateX: 75, rotateY: -45, opacity: 0, scale: 0.6 },
      {
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'back.out(1.7)',
      }
    );

    // Animation 3D sur hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

      gsap.to(el, {
        rotateY: x,
        rotateX: -y,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const resetRotation = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', resetRotation);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', resetRotation);
    };
  }, []);

  return (
    <div className="perspective-[1200px] ml-10">
      <div
        ref={logoRef}
        className="text-5xl font-extrabold font-mono tracking-wide transform-gpu drop-shadow-[4px_4px_6px_rgba(0,0,0,0.5)]"
      >
        <span className="bg-gradient-to-r from-red-700 via-slate-400 to-blue-600 text-transparent bg-clip-text">
          TheEnd.Page
        </span>
      </div>
    </div>
  );
};

export default Logo;
