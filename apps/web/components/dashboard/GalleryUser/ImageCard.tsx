"use client";
import Image from 'next/image';
import { ReactNode } from 'react';

interface ImageCardProps {
  id: number;
  src: string;
  date: string;
  description: string;
  children?: ReactNode;
}

export default function ImageCard({ id, src, date, description }: ImageCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <Image
        src={src}
        alt={`Page ${id}`}
        width={300}
         height={200}
        className="w-full h-40 object-cover brightness-90 group-hover:brightness-110 transition duration-700"
        quality={95}
      />
      
      <div className="p-4">
        <div className="absolute bottom-16 w-full left-0 px-4">
          <h3 className="text-xl font-bold text-white">Projet {id}</h3>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
        
        {/* Nouvelle section de description */}
        <div className="mt-2 pt-12 text-gray-300 text-sm">
          {description} 
        </div>
      </div>
      
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan-500/90 backdrop-blur flex items-center justify-center shadow-md">
        <span className="text-white text-sm font-bold"> {id}</span>
      </div>
    </div>
  );
}