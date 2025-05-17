"use client";

import React from 'react';
import { useState } from "react";
import { descriptions, images, titre } from "./data/index";
import { ArrowLeft, ArrowRight } from "lucide-react";

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20;

const Suggestion = () => {
  const [index, setIndex] = useState(2);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  
  const goToPrev = () => setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  /* first return() */

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full py-10">
      {/* Popup Modale */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src={images[selectedImage]} 
                className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                alt="Preview" 
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{titre[selectedImage]}</h3>
                <p className="text-gray-600">{descriptions[selectedImage]}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4">
        <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col w-full justify-center">
          
          {/* Images Container - Modifié pour l'effet pile */}
          <div className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] relative ">
            {images.map((image, i) => {
              // Calculer la position dans la pile
              const position = (i - index + images.length) % images.length;
              const isActive = i === index;
              const isNext = position === 1;
              const isPrev = position === images.length - 1;

              /* Second return */

              return (
                <img
                  key={i}
                  src={image}
                  onClick={() => setSelectedImage(i)}
                  className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-300 ${
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
    </div>
  );
};

export default Suggestion;
 
// lg:bottom-0 
//