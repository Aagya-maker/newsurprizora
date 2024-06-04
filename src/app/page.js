'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000 }),
    ]);

    return (
        <div>
            <h1 className='text-center font-bold mb-4'>Surprizora</h1>
            <div
                className='embla mx-auto mt-20 h-128 max-w-6xl border-collapse'
                ref={emblaRef}
            >
                <div className='embla__container h-full'>
                    <div className='embla__slide flex items-center justify-center'>
                        <img
                            src='surprizora.png'
                            alt='Welcome to surprizora'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='embla__slide flex items-center justify-center'>
                        <img
                            src='surprizora 2.png'
                            alt='slide 2'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='embla__slide flex items-center justify-center'>
                        <img
                            src='surprizora 6.png'
                            alt='slide 2'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
            <div className='text-center mt-8'>
                <button className='bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 rounded-full border-b-8'>
                    Take the questionnaire and begin the gift quest
                </button>
            </div>
        </div>
    );
}
