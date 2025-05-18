import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';


const heightSets = [
  [500, 400, 450, 410, 510],
  [330, 550, 400, 480, 350],
  [450, 350, 520, 380, 420],
  [380, 420, 500, 550, 320],
  [530, 320, 470, 400, 510]
];

interface VerticalBarsProps {
  activeIndex: number;
}

const VerticalBars: React.FC<VerticalBarsProps> = ({ activeIndex }) => {
  const barsRef = useRef<Array<HTMLDivElement | null>>([]);


  useEffect(() => {
    barsRef.current = barsRef.current.slice(0, 5);
  }, []);


  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        gsap.to(bar, {
          height: `${heightSets[activeIndex][i]}px`,
          duration: 0.8,
          ease: 'power2.inOut'
        });
      }
    });
  }, [activeIndex]);

  return (
    <div className="absolute right-30 sm:right-10 md:right-20 top-1/2 -translate-y-1/2 flex flex-row items-center gap-4 z-20">
      {heightSets[activeIndex].map((height, i) => (
        <div
          key={i}
          ref={(el) => { barsRef.current[i] = el; }}
          style={{ height: `${height}px` }}
          className={clsx(
            'rounded-full bg-white/10 border border-black/20',
            'shadow-[0_0_15px_2px_rgba(0,0,0,0.3)]',
            'transition-all duration-700',
            'w-[20px] sm:w-10 md:w-20 lg:w-30'
          )}
        />
      ))}
    </div>
  );
};

export default VerticalBars;
export { heightSets };