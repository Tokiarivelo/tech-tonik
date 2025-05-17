"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { LogOut } from "lucide-react";
import { DirectiveInfo } from "@apollo/client/utilities";

export default function NavbarUser() {
  useEffect(() => {
    gsap.from(".navbar", {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
  }, []);

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-700 to-cyan-500 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          TheEnd<span className="text-black bg-white px-2 ml-1 rounded-sm">.page</span>
        </h1>
        <button className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}