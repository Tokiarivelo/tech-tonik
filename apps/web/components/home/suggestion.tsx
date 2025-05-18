
"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SuggestionProps {
  onImageClick: (index: number) => void;
}

const getRandomRotation = () => Math.floor(Math.random() * 41) - 20;

const Suggestion = ({ onImageClick }: SuggestionProps) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const { descriptions, images, titre } = require('./data/index');

  const navigateSlide = (direction: 'prev' | 'next') => {
    setCurrentIndex(prev => 
      direction === 'prev' 
        ? (prev === 0 ? images.length - 1 : prev - 1)
        : (prev === images.length - 1 ? 0 : prev + 1)
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full py-10">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4">
        <h1 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-10 lg:mb-16 w-full px-4 tracking-wider drop-shadow-lg">
          TheEnd.page est un endroit où vous pouvez vous exprimer librement
        </h1>

        <div className="flex gap-x-20 lg:gap-x-32 items-center lg:flex-row flex-col w-full justify-center">
          {/* Images Stack */}
          <div className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] relative mx-auto">
            {images.map((image: string, i: number) => {
              const position = (i - currentIndex + images.length) % images.length;
              const isActive = i === currentIndex;
              const isNext = position === 1;
              const isPrev = position === images.length - 1;

              return (
                <img
                  key={i}
                  src={image}
                  onClick={() => onImageClick(i)}
                  className={`absolute w-full h-full object-cover rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${
                    isActive 
                      ? 'opacity-100 z-10 shadow-xl'
                      : (isNext || isPrev) 
                        ? 'opacity-60 z-0' 
                        : 'opacity-0'
                  }`}
                  style={{
                    transform: isActive 
                      ? 'rotate(0deg) scale(1)'
                      : `rotate(${getRandomRotation()}deg) scale(${isNext || isPrev ? 0.9 : 0.8})`,
                    ...(isNext && { right: '-5%', top: '5%' }),
                    ...(isPrev && { left: '-5%', bottom: '5%' })
                  }}
                  alt={`Slide ${i}`}
                  loading="lazy"
                />
              );
            })}
          </div>
          
          {/* Content Description */}
          <div className="sm:w-[400px] w-[320px] mt-10 lg:mt-0 min-h-[250px]">
            {/* Title */}
            <div className="h-[60px] mb-6 overflow-hidden relative">
              {titre.map((title: string, i: number) => (
                <h2
                  key={i}
                  className={`text-center text-xl sm:text-2xl font-bold text-gray-800 absolute w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    i === currentIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{
                    transitionDelay: i === currentIndex ? '200ms' : '0ms'
                  }}
                >
                  {title}
                </h2>
              ))}
            </div>

            {/* Description */}
            <div className="h-[140px] overflow-hidden relative">
              {descriptions.map((desc: string, i: number) => (
                <p
                  key={i}
                  className={`text-center text-gray-600 text-base sm:text-lg absolute w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    i === currentIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: i === currentIndex ? '300ms' : '0ms'
                  }}
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex gap-6 mt-12">
          <button
            onClick={() => navigateSlide('prev')}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Previous slide"
          >
            <ArrowLeft size={15} className="text-gray-700" />
          </button>
          <button
            onClick={() => navigateSlide('next')}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Next slide"
          >
            <ArrowRight size={15} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;