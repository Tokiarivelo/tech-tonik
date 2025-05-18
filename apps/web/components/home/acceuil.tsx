'use client'

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import image1 from '@/public/images/colere.png'
import image2 from '@/public/images/absurde.png'
import image3 from '@/public/images/dramatique.png'
import image4 from '@/public/images/elegant.png'
import image5 from '@/public/images/triste.png'
import Description from './description';
import VerticalBars from './VerticalBars';
import ImageScroll from './ImageScroll';

const images = [image1, image2, image3, image4, image5];

export default function Acceuil() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const touchStartY = useRef(0);

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    
    if (wheelTimeout.current) {
      clearTimeout(wheelTimeout.current);
    }
    
    wheelTimeout.current = setTimeout(() => {
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.min(Math.max(activeIndex + direction, 0), images.length - 1);
      
      if (newIndex !== activeIndex) {
        gsap.fromTo(
          '.background-image',
          { scale: 1 },
          {
            scale: 1.1,
            duration: 1,
            ease: 'power2.out'
          }
        );
        
        setActiveIndex(newIndex);
      }
    }, 100);
  };


  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY;
    
    if (Math.abs(diff) > 50) {
      const direction = diff > 0 ? 1 : -1;
      const newIndex = Math.min(Math.max(activeIndex + direction, 0), images.length - 1);
      
      if (newIndex !== activeIndex) {
        gsap.fromTo(
          '.background-image',
          { scale: 1 },
          {
            scale: 1.1,
            duration: 1,
            ease: 'power2.out'
          }
        );
        
        setActiveIndex(newIndex);
        touchStartY.current = touchY;
      }
    }
  };

  
  useEffect(() => {

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    
  
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActiveIndex((prev) => Math.min(prev + 1, images.length - 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
    };
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="flex w-full min-h-screen overflow-hidden relative">
      <ImageScroll 
        images={images} 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex} 
      />
      <div className="absolute inset-0 z-0">
        <Image
          src={images[activeIndex]}
          alt=""
          fill
          className="object-cover transition-transform duration-700 background-image scale-105"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="z-20 text-white px-10 pt-20 text-content">
        <h1 className="text-4xl font-bold mb-4">Parce que chaque fin mérite une scène</h1>
        <div>
          <Description activeIndex={activeIndex} />
        </div>
      </div>

      <VerticalBars activeIndex={activeIndex} />
    </div>
  );
}
