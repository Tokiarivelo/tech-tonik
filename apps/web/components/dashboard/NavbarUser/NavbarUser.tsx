"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { LogOut, User } from "lucide-react";

export default function NavbarUser() {
  useEffect(() => {
    gsap.from(".navbar", {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-gray-800/90 backdrop-blur-lg border-b border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TE</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TheEnd.page
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <User size={20} className="text-gray-300" />
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all">
            <LogOut size={18} />
            <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>
      </div>
    </nav>
  );
}