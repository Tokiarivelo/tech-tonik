"use client";
import Suggestion from '@/components/home/suggestion';
import SuggestionHappy from '@/components/home/suggestionHappy';
import SuggestionMoodSad from '@/components/home/suggestionMoodSad';
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Page = () => {
  return (
    <div className='relative bg-primary h-screen'>
      <div className='absolute inset-0 text-tertiary'>
        <Swiper 
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }} 
          modules={[Navigation]} 
          className="h-full w-full"
        >
          <SwiperSlide className="flex items-center justify-center">
            <Suggestion/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <SuggestionMoodSad/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <SuggestionHappy/>
          </SwiperSlide>
          
          {/* Boutons de navigation customisés */}
          <div className="custom-prev absolute left-4 z-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition-all duration-300 shadow-lg">
            <ArrowLeft className="text-white cursor-pointer w-15 h-15" />
          </div>
          
          <div className="custom-next absolute right-4 z-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition-all duration-300 shadow-lg">
            <ArrowRight className="text-white cursor-pointer w-15 h-15" />
          </div>
        </Swiper>

        {/* Indicateurs de pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === 0 ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;