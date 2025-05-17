"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PlusCircle } from "lucide-react";

export default function CreatePageButton() {
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 1.2 }
    );
  }, []);

  return (
    <div ref={btnRef} className="fixed bottom-8 right-8 z-50">
      <button
        className="bg-white text-indigo-700 hover:text-white hover:bg-indigo-700 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-indigo-500"
        title="Créer une nouvelle page"
      >
        <PlusCircle size={32} />
      </button>
    </div>
  );
}