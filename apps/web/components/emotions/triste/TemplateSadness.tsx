'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ImageCard from '@/components/dashboard/GalleryUser/ImageCard';
import { useRouter } from 'next/navigation';

const mockPages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/templates/${(i % 4) + 1}.JPG`,
  date: i < 2 ? "Aujourd'hui" : i < 4 ? 'Hier' : `Il y a ${i} jours`,
}));

const ITEMS_PER_PAGE = 4;

// Fonction stable pour obtenir les premières pages
function getInitialPages() {
  return mockPages.slice(0, ITEMS_PER_PAGE);
}

export default function TemplateSadness() {
  const [displayedPages, setDisplayedPages] = useState(getInitialPages);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = useRef(false);
  const animationIdRef = useRef(0); // Pour générer des clés uniques
  const route = useRouter();

  // Fonction pour obtenir 4 pages aléatoires
  function getRandomPages() {
    if (typeof window === 'undefined') return getInitialPages();
    const shuffled = [...mockPages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, ITEMS_PER_PAGE).map(page => ({
      ...page,
      uniqueKey: `${page.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    }));
  }

  // Fonction de changement avec animation
  const animateCardChange = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    animationIdRef.current += 1;

    const newPages = getRandomPages();
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    const indices = [0, 1, 2, 3].sort(() => 0.5 - Math.random());

    indices.forEach((i, idx) => {
      const el = cardsRef.current[i];
      if (!el) return;

      tl.to(el, {
        rotateY: 0,
        duration: 1,
        ease: 'power2.in',
        delay: idx * 0.3,
        onComplete: () => {
          setDisplayedPages(prev => {
            const updated = [...prev];
            updated[i] = newPages[i];
            return updated;
          });
        },
      }).to(
        el,
        {
          rotateY: 0,
          duration: 1,
          ease: 'power2.out',
        },
        `-=${0.15}`,
      );
    });
  };

  useEffect(() => {
    const timer = setInterval(animateCardChange, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-1">
      <div className="mb-8 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Templates
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choisissez votre modèle préféré pour
          <span className="text-cyan-400 font-medium"> votre site</span>.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {displayedPages.map((page, i) => (
          <div
            key={`${page.id}-${i}`} // Utilisation de la clé unique
            ref={el => {
              if (el) cardsRef.current[i] = el;
            }}
            className="transform-gpu preserve-3d cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
            onClick={() => route.push('/dashboard/create/sadness/1')} // Redirection vers la page de l'émotion
          >
            <ImageCard id={page.id} src={page.src} date={page.date} description={''} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={animateCardChange}
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg transition"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
