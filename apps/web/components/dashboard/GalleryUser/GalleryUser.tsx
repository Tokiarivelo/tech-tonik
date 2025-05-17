"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from 'next/image';

const mockPages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/${(i % 4) + 1}.jpg`,
  date: i < 2 ? "Aujourd'hui" : i < 4 ? "Hier" : `Il y a ${i} jours`
}));

export default function PageGallery() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation pour le header
      gsap.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      // Animation pour les cartes
      gsap.from(cardsRef.current.filter(Boolean), {
        y: 50,
        opacity: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-8">
      {/* Section Texte avant les images */}
      <div ref={headerRef} className="mb-12 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Vos Créations
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Retrouvez ici toutes vos pages créées. Cliquez pour éditer ou créez-en de nouvelles pour 
          <span className="text-cyan-400 font-medium"> booster votre présence en ligne</span>.
        </p>
      </div>

      {/* Galerie d'images */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockPages.map((page, i) => (
          <div
            key={page.id}
            ref={el => {
  if (el) cardsRef.current[i] = el;
}}
            className="relative group overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Image
              src={page.src}
              alt={`Page ${page.id}`}
              width={400}
              height={500}
              className="w-full h-64 object-cover brightness-90 group-hover:brightness-110 transition duration-700"
              quality={95}
            />
            
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="text-xl font-bold text-white">Projet {page.id}</h3>
              <p className="text-gray-400 text-sm">{page.date}</p>
            </div>
            
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan-500/90 backdrop-blur flex items-center justify-center shadow-md">
              <span className="text-white text-sm font-bold">{page.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}