import React, { useRef } from 'react';
// import TextAnimation from '../animations/TextAnimation';
import Link from 'next/link';

interface DescriptionProps {
  activeIndex: number;
}

const Description: React.FC<DescriptionProps> = ({ activeIndex }) => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Contenu spécifique à chaque style/image
  const contents = [
    {
      // Colère (index 0)
      subtitle: "Tu quittes un taf qui t'a poussé à bout ?",
      text: "Exprime ta colère avec style. Un départ furieux mérite mieux qu'un simple ",
      emphasis: "« J'en ai marre ! »",
      cta: "Claquer la porte avec panache"
    },
    {
      // Absurde (index 1)
      subtitle: "Tu quittes un projet qui n'avait aucun sens ?",
      text: "Embrasse l'absurdité de la situation. Ce moment mérite mieux qu'un simple ",
      emphasis: "« C'est n'importe quoi »",
      cta: "Partir de façon mémorable"
    },
    {
      // Dramatique (index 2)
      subtitle: "Tu quittes une relation intense ?",
      text: "Donne à ce final toute l'intensité qu'il mérite. Ce moment dramatique mérite mieux qu'un simple ",
      emphasis: "« C'est fini »",
      cta: "Créer un final dramatique"
    },
    {
      // Élégant (index 3)
      subtitle: "Tu quittes avec classe et dignité ?",
      text: "Fais-le avec élégance et raffinement. Ce départ distingué mérite mieux qu'un simple ",
      emphasis: "« Au revoir »",
      cta: "Partir avec élégance"
    },
    {
      // Triste (index 4)
      subtitle: "Tu quittes à contrecœur ?",
      text: "Exprime ta mélancolie avec justesse. Ce moment émouvant mérite mieux qu'un simple ",
      emphasis: "« Adieu... »",
      cta: "Exprimer ses émotions"
    }
  ];

  // Sélectionner le contenu approprié basé sur l'index actif
  const currentContent = contents[activeIndex];

  return (
    <>
      <h3
        ref={subtitleRef}
        className="text-lg md:text-xl text-[#E2D4BB] font-medium mb-4"
      >
        {currentContent.subtitle}
      </h3>

      <p
        ref={paragraphRef}
        className="text-2xl text-secondary font-medium mx-auto mb-5 whitespace-normal"
      >
        {currentContent.text}
        <strong className="font-semibold text-secondary">{currentContent.emphasis}</strong>.
        <br />
        Bienvenue sur TheEnd.page – l'endroit où tu transformes ton départ en spectacle.
        <br />
        Ici, tu crées ta page de sortie, avec ton style
      </p>

      <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
        <button
          ref={buttonRef}
          className="px-6 py-3 lg:px-7 lg:py-3.5 rounded bg-primary text-secondary font-medium shadow-lg transition-all will-change-transform hover:scale-105"
        >
          <Link href='/login' className="block w-full h-full">
            {currentContent.cta}
          </Link>
        </button>
      </div>
    </>
  )
}

export default Description;