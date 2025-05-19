'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function CreatePageButton() {
  const btnRef = useRef<HTMLDivElement>(null); // Typage explicite

  return (
    <div ref={btnRef} className="fixed bottom-8 right-8 z-40">
      <button
        className="cursor-pointer group relative bg-gradient-to-br from-cyan-500 to-blue-600 p-5 rounded-full shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
        title="Créer une nouvelle page"
      >
        <Link href="/dashboard/create">
          <Plus size={28} className="text-white" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Nouveau Projet
          </span>

          {/* Effet de halo */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse bg-cyan-400/30"></div>
        </Link>
      </button>
    </div>
  );
}
