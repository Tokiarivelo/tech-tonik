import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { StaticImageData } from 'next/image';

interface ImageScrollProps {
  images: StaticImageData[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ImageScroll: React.FC<ImageScrollProps> = ({ images, activeIndex, setActiveIndex }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const touchStartY = useRef(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  // Fonction pour changer l'image active avec animation
  const changeActiveImage = (index: number) => {
    if (index >= 0 && index < images.length && index !== activeIndex) {
      // Animer l'image d'arrière-plan via le parent
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


  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (wheelTimeout.current) {
      clearTimeout(wheelTimeout.current);
    }
    
    wheelTimeout.current = setTimeout(() => {
      const direction = e.deltaY > 0 ? 1 : -1;
      changeActiveImage(Math.min(Math.max(activeIndex + direction, 0), images.length - 1));
    }, 50);
  };

 
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY;
    
    if (Math.abs(diff) > 50) {
      const direction = diff > 0 ? 1 : -1;
      changeActiveImage(Math.min(Math.max(activeIndex + direction, 0), images.length - 1));
      touchStartY.current = touchY;
    }
  };


  const handleMouseDown = (e: React.MouseEvent) => {
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
  };


  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageElement = container.children[activeIndex] as HTMLElement;
      
      if (imageElement) {
        const containerCenter = container.offsetHeight / 2;
        const imageCenter = imageElement.offsetTop + imageElement.offsetHeight / 2;
        const scrollPosition = imageCenter - containerCenter;
        
        gsap.to(container, {
          scrollTop: scrollPosition,
          duration: 0.5,
          ease: 'power2.inOut'
        });
      }
    }
  }, [activeIndex]);

  return (
    <div 
      ref={scrollContainerRef}
      className="w-[300px] flex flex-col gap-y-12 items-center p-10 z-10 overflow-auto hide-scrollbar"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          onClick={() => changeActiveImage(index)}
          className={`w-[120px] h-[120px] rounded-full overflow-hidden cursor-pointer border-2 transition-transform duration-300 ${
            activeIndex === index ? 'border-white scale-150 z-10' : 'border-transparent scale-100'
          }`}
        >
          <Image src={src} alt="" width={120} height={120} className="object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageScroll;