'use client'; 

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const words = ['dramatique', 'absurde', 'en colère', 'classe', 'juste honnête'];

const TextAnimation = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Vérifier que nous sommes côté client
    if (typeof window !== 'undefined' && textRef.current) {
      let currentIndex = 0;
      const textElement = textRef.current;

      const animateText = () => {
        gsap.to(textElement, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            currentIndex = (currentIndex + 1) % words.length;
            if (textElement) {
              textElement.textContent = words[currentIndex];
              gsap.to(textElement, {
                opacity: 1,
                duration: 0.5,
                delay: 0.1,
              });
            }
          },
        });
      };

      const interval = setInterval(animateText, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <span 
      ref={textRef}
      className="inline-block font-bold text-amber-500 dark:text-amber-400 px-1"
    >
      {words[0]}
    </span>
  );
};

export default TextAnimation;