import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { StaticImageData } from 'next/image';

interface ImageScrollProps {
  images: StaticImageData[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  autoScroll?: boolean; // Nouvelle propriété pour activer/désactiver le défilement automatique
  autoScrollInterval?: number; // Intervalle de défilement en millisecondes
}

const ImageScroll: React.FC<ImageScrollProps> = ({ 
  images, 
  activeIndex, 
  setActiveIndex, 
  autoScroll = true, // Activé par défaut
  autoScrollInterval = 3000 // 3 secondes par défaut
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const touchStartY = useRef(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [userInteracting, setUserInteracting] = useState(false);
  
  const changeActiveImage = (index: number) => {
    if (index >= 0 && index < images.length && index !== activeIndex) {
      gsap.fromTo(
        '.background-image',
        { scale: 1 },
        {
          scale: 1.1,
          duration: 1,
          ease: 'power2.out'
        }
      );

      setActiveIndex(index);
    }
  };

  const startAutoScroll = () => {
    if (!autoScroll) return;
    
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    
    autoScrollTimeoutRef.current = setTimeout(() => {
      if (!userInteracting) {
        const nextIndex = (activeIndex + 1) % images.length;
        changeActiveImage(nextIndex);
      }
      startAutoScroll();
    }, autoScrollInterval);
  };
  
  useEffect(() => {
    startAutoScroll();
    
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [activeIndex, userInteracting, autoScroll, autoScrollInterval]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setUserInteracting(true);
    
    if (wheelTimeout.current) {
      clearTimeout(wheelTimeout.current);
    }
    
    wheelTimeout.current = setTimeout(() => {
      const direction = e.deltaY > 0 ? 1 : -1;
      changeActiveImage(Math.min(Math.max(activeIndex + direction, 0), images.length - 1));
      
      setTimeout(() => setUserInteracting(false), 2000);
    }, 50);
  };
 
  const handleTouchStart = (e: React.TouchEvent) => {
    setUserInteracting(true);
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY;
    
    if (Math.abs(diff) > 50) {
      const direction = diff > 0 ? 1 : -1;
      changeActiveImage(Math.min(Math.max(activeIndex + direction, 0), images.length - 1));
      touchStartY.current = touchY;
      
      setTimeout(() => setUserInteracting(false), 2000);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setUserInteracting(true);
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(scrollContainerRef.current?.scrollTop || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const diff = startY - e.clientY;
    if (Math.abs(diff) > 50) {
      const direction = diff > 0 ? 1 : -1;
      changeActiveImage(Math.min(Math.max(activeIndex + direction, 0), images.length - 1));
      setStartY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setUserInteracting(false), 2000);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
    }
  }, [activeIndex]);

  const handlePrevClick = () => {
    setUserInteracting(true);
    changeActiveImage(Math.max(activeIndex - 1, 0));
    setTimeout(() => setUserInteracting(false), 2000);
  };

  const handleNextClick = () => {
    setUserInteracting(true);
    changeActiveImage(Math.min(activeIndex + 1, images.length - 1));
    setTimeout(() => setUserInteracting(false), 2000);
  };

  return (
    <div className="relative">
      <div 
        ref={scrollContainerRef}
        className="w-[300px] flex flex-col gap-y-12 items-center p-10 z-10 overflow-visible"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          height: '400px',
          position: 'relative'
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => {
              setUserInteracting(true);
              changeActiveImage(index);
              setTimeout(() => setUserInteracting(false), 2000);
            }}
            className={`w-[120px] h-[120px] rounded-full overflow-hidden cursor-pointer border-2 transition-all duration-500 absolute left-1/2 transform -translate-x-1/2 ${
              activeIndex === index 
                ? 'border-white scale-150 z-10 top-1/2 -translate-y-1/2' 
                : index < activeIndex 
                  ? `border-transparent scale-100 top-[${20 + (index - activeIndex) * 140}px] opacity-70`
                  : `border-transparent scale-100 top-[${220 + (index - activeIndex) * 140}px] opacity-70`
            }`}
            style={{
              top: index === activeIndex 
                ? '50%' 
                : index < activeIndex 
                  ? `${20 + (index - activeIndex) * 140}px`
                  : `${220 + (index - activeIndex) * 140}px`
            }}
          >
            <Image src={src} alt="" width={120} height={120} className="object-cover" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setUserInteracting(true);
              changeActiveImage(index);
              setTimeout(() => setUserInteracting(false), 2000);
            }}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;