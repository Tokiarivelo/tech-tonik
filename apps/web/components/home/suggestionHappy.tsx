"use client";

import React from 'react';
import { useState } from "react";
import { descriptions, images, titre } from "./data/indexMoodHappy";
import { ArrowLeft, ArrowRight } from "lucide-react";

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20;

export const SuggestionHappy = ({ onImageClick }: { onImageClick: (index: number) => void }) => {
  const [index, setIndex] = useState(2);
  
  const goToPrev = () => setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full py-10">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4">
        <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col w-full justify-center">
          <h1 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] tracking-wider drop-shadow-lg">
              Parce que si c'est la fin, autant la rendre inoubliable...
          </h1>
          {/* Images Container */}
          <div className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] relative">
            {images.map((image, i) => {
              const position = (i - index + images.length) % images.length;
              const isActive = i === index;
              const isNext = position === 1;
              const isPrev = position === images.length - 1;

              return (
                <img
                  key={i}
                  src={image}
                  onClick={() => onImageClick(i)}
                  className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-300 cursor-pointer ${
                    isActive ? "opacity-100 z-10" : 
                    (isNext || isPrev) ? "opacity-30 z-0" : "opacity-0"
                  }`}
                  style={{
                    transform: isActive 
                      ? "rotate(0deg)" 
                      : `rotate(${getRandomNumber()}deg)`,
                    ...(isNext && { 
                      right: "-10px",
                      top: "10px",
                      width: "95%",
                      height: "95%"
                    }),
                    ...(isPrev && {
                      left: "-10px",
                      bottom: "10px",
                      width: "95%",
                      height: "95%"
                    })
                  }}
                  alt={`Slide ${i}`}
                />
              );
            })}
          </div>
        
        {/* Descriptions (inchangé) */}
        <div className="relative sm:w-[400px] w-[320px] mt-100 lg:mt-5 h-[250px] overflow-hidden">*
            {/* Titre */}
            <div className="h-[60px] mb-4 overflow-hidden relative">
            {titre.map((title, i) => (
              <h1
              key={i}
              className={`text-center text-xl sm:text-2xl font-bold text-gray-800 absolute w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
              transitionDelay: i === index ? "150ms" : "0ms"}}>
                {title}
              </h1>
            ))}
            </div>

            {/* Paragraphe */}
            <div className="h-[140px] overflow-hidden relative mt-4">
              {descriptions.map((desc, i) => (
                <p
                key={i}
                className={`text-center text-gray-600 text-base sm:text-lg absolute w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                transitionDelay: i === index ? "150ms" : "0ms"}}>
                  {desc}
                </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Controls (inchangé) */}
      <div className="absolute mt-165 left-1/2 transform -translate-x-1/2 flex gap-x-30">
        <button
          className="bg-gray-100 p-10 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={goToPrev}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          className="bg-gray-100 p-10 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={goToNext}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  
  )
}

export default SuggestionHappy ;
