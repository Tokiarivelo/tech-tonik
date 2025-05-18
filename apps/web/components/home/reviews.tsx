"use client";
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Suggestion from './suggestion';
import SuggestionHappy from '@/components/home/suggestionHappy';
import SuggestionMoodSad from '@/components/home/suggestionMoodSad';

type PreviewData = {
  title: string;
  description: string;
  image: string;
  slideIndex: number;
  itemIndex: number;
};

const Reviews = () => {
  const swiperRef = useRef<any>(null);
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null);

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
    <div className="relative  h-screen">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-full w-full"
        >
          {sliderData.map((slider, index) => (
            <SwiperSlide key={index}>
              <slider.component onImageClick={(i) => openPreview(index, i)} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation personnalisée */}
        <button
          className="swiper-button-prev absolute left-4 z-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <ArrowLeft className="text-gray-800 size-10" />
        </button>

        <button
          className="swiper-button-next absolute right-4 z-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <ArrowRight className="text-gray-800 size-10" />
        </button>

        {/* Modal Preview */}
        {activePreview && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closePreview}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close preview"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
              
              <div className="aspect-video mb-4">
                <img 
                  src={activePreview.image} 
                  alt={activePreview.title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{activePreview.title}</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {activePreview.description}
                </p>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                <button
                  onClick={() => navigatePreview('prev')}
                  className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="size-15" />
                  Précédent
                </button>
                <button
                  onClick={closePreview}
                  className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  Fermer
                </button>
                <button
                  onClick={() => navigatePreview('next')}
                  className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  Suivant
                  <ArrowRight className="size-15" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;