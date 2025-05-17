'use client';
// components/TheEndAnimation.jsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function TheEndAnimation({ text = 'TheEnd.page' }) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // utility: wrap each letter in a span
  const splitLetters = (str: string) =>
    str.split('').map((char, i) => (
      <span key={i} className="inline-block overflow-hidden">
        <span className="inline-block">{char}</span>
      </span>
    ));

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll('span > span');
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      repeat: -1, // -1 pour répéter à l’infini
      repeatDelay: 2, // délai de 2 secondes entre chaque cycle
    });
    if (!letters) return;
    tl.from(letters, {
      duration: 0.6,
      y: 50,
      opacity: 0,
      stagger: { each: 0.05, from: 'start' },
    });
  }, []);

  return (
    <h1 ref={containerRef} className="font-bold tracking-tight flex flex-wrap justify-center">
      {splitLetters(text)}
    </h1>
  );
}
