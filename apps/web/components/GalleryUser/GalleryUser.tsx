"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from 'next/image';

const mockPages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
];

export default function PageGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

 useEffect(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: -40,
      opacity: 50,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
    tl.from(galleryRef.current?.children || [], {
      y: 30,
      opacity: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight leading-tight"
      >
        <span className="block text-xl md:text-2xl font-medium text-indigo-300 mb-2">
          Votre espace créatif
        </span>
        Parcourez vos créations
        <span className="block text-lg md:text-xl font-normal text-indigo-200 mt-4">
          ou commencez un nouveau projet
        </span>
      </h1>
      
      <div
        ref={galleryRef}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {mockPages.map((src, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-indigo-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Image
              src={src}
              alt={`Page ${i + 1}`}
              width={500}
              height={500}
              className="w-full h-64 object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              quality={100}
            />
            
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h3 className="text-xl font-bold text-white">Page {i + 1}</h3>
              <p className="text-indigo-200 text-sm mt-1">Dernière modification: Aujourd'hui</p>
            </div>
            
            <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/90 backdrop-blur shadow-lg group-hover:bg-pink-500 transition-colors duration-300">
              <span className="text-white font-bold">{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}