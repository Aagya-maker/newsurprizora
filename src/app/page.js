'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000 }),
    ]);

    return (
        <div>
            <h1 className='text-center text-5xl font-bold mb-4'>Surprizora</h1>
            <div
                className='embla mx-auto mt-20 h-128 max-w-6xl border'
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
                            src='surprizora 3.png'
                            alt='slide 2'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
