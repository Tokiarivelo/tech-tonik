"use client";
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Suggestion from '@/components/home/suggestion';
import SuggestionHappy from '@/components/home/suggestionHappy';
import SuggestionMoodSad from '@/components/home/suggestionMoodSad';
import Link from 'next/link';

const Page = () => {
  const swiperRef = useRef<any>(null);
  const [activePreview, setActivePreview] = useState<{
    title: string;
    description: string;
    image: string;
    slideIndex: number;
    itemIndex: number;
  } | null>(null);

  // Données des différents sliders
  const sliderData = [
    { component: Suggestion, data: require('@/components/home/data/index') },
    { component: SuggestionMoodSad, data: require('@/components/home/data/indexMoodSad') },
    { component: SuggestionHappy, data: require('@/components/home/data/indexMoodHappy') }
  ];

  const openPreview = (slideIndex: number, itemIndex: number) => {
    const currentData = sliderData[slideIndex].data;
    setActivePreview({
      title: currentData.titre[itemIndex],
      description: currentData.descriptions[itemIndex],
      image: currentData.images[itemIndex],
      slideIndex,
      itemIndex
    });
  };

  const closePreview = () => setActivePreview(null);

  const navigatePreview = (direction: 'prev' | 'next') => {
    if (!activePreview) return;
    
    const { slideIndex, itemIndex } = activePreview;
    const currentData = sliderData[slideIndex].data;
    const itemCount = currentData.images.length;
    
    let newItemIndex = direction === 'next' 
      ? (itemIndex + 1) % itemCount
      : (itemIndex - 1 + itemCount) % itemCount;
    
    openPreview(slideIndex, newItemIndex);
  };

  return (
    <div className="relative bg-primary h-screen">
      <div className="absolute inset-0">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-full w-full"
        >
          {sliderData.map((slider, index) => (
            <SwiperSlide key={index}>
              <slider.component onImageClick={(i) => openPreview(index, i)} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation principale */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute cursor-pointer left-4 z-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="text-gray-800 w-10 h-10" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute cursor-pointer right-4 z-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          <ArrowRight className="text-gray-800 w-10 h-10" />
        </button>

        {/* Modal Preview améliorée */}
        {activePreview && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closePreview}
                className="absolute cursor-pointer top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
              
              <img 
                src={activePreview.image} 
                alt={activePreview.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <h2 className="text-2xl font-bold mb-2">{activePreview.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{activePreview.description}</p>
              
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => navigatePreview('prev')}
                  className="px-4  py-2 cursor-pointer bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Précédent
                </button>
                <button
                  onClick={() => navigatePreview('next')}
                  className="px-4  py-2 cursor-pointer bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Suivant
                </button>
              </div>
              
              <div className="mt-4 flex justify-center">
                <Link
                  href=""
                  passHref
                  legacyBehavior
                >
                <button
                  onClick={closePreview}
                  className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Voir plus
                </button>

                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;