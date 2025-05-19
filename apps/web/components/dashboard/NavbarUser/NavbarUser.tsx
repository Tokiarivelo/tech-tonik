'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function NavbarUser() {
  const teRef = useRef(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Apparition de la navbar
    // gsap.fromTo(
    //   '.navbar',
    //   {
    //     y: -80,
    //     opacity: 0,
    //     duration: 1.2,
    //   },
    //   {
    //     y: -80,
    //     opacity: 1,
    //     duration: 1.2,
    //   },
    // );

    // Rotation pièce 3D sur "TE"
    gsap.to(teRef.current, {
      rotateY: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
      transformOrigin: 'center center',
    });

    // Apparition lettre par lettre
    gsap.from(lettersRef.current, {
      opacity: 0,
      y: -10,
      stagger: 0.08,
      delay: 0.5,
      ease: 'power2.out',
      duration: 0.6,
    });

    // Zoom in-out boucle infinie
    gsap.to('.theend-text', {
      scale: 1.08,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, []);

  const text = 'TheEnd.page';

  const handleSignOut = async () => {
    // Déconnecte l’utilisateur, et le redirige vers /login
    await signOut({
      redirect: true, // NextAuth va déclencher la redirection
      callbackUrl: '/', // Vers où renvoyer après déconnexion
    });
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-gray-900 backdrop-blur-lg border-b border-gray-700 z-50">
      <Link
        href="/"
        className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          {/* Logo TE tournant */}
          <div
            ref={teRef}
            className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <span className="text-white font-bold text-sm">TE</span>
          </div>

          {/* Texte animé */}
          <h1 className="text-2xl font-bold text-white theend-text flex space-x-0.5">
            {text.split('').map((char, i) => (
              <span
                key={i}
                ref={el => {
                  if (el) lettersRef.current[i] = el;
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <User size={20} className="text-gray-300" />
          </button>
          <button
            onClick={handleSignOut}
            className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>
      </Link>
    </nav>
  );
}
