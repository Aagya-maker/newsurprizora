'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import SmoothScroll from 'smooth-scroll';
import QuestionsPage from './questions/page'; 
import CountrySelector from './countryselector/page';


export default function EmblaCarousel() {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        if (!embla) return;
        const updateScrollProgress = () => {
            setScrollProgress(embla.scrollProgress());
        };
        embla.on('scroll', updateScrollProgress);
        return () => embla.off('scroll', updateScrollProgress);
    }, [embla]);


    return (
        <div>
            <CountrySelector/>
            <section id="page-top" className='h-screen'>
                <h1 className='text-center font-bold mb-1'>Surprizora</h1>
                <div
                    className='embla mx-auto mt-20 h-128 max-w-6xl border-collapse'
                    ref={emblaRef}
                    style={{opaciit:1-Math.pow(scrollProgress, 15),
                        boxShadow: '4px 8px 36px 12px purple',
                     }}
                >
                    <div className='embla__container h-full'>
                        <div className='embla__slide flex items-center justify-center'
                        style={{opaciit:1-Math.pow(scrollProgress, 15),
                            boxShadow: '0px 12px 36px -4px aliceblue',
                         }}
                        
                        >
                            <img
                                src='surprizora.png'
                                alt='Welcome to surprizora'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='embla__slide flex items-center justify-center'
                         style={{opaciit:1 -Math.pow(scrollProgress, 15),
                            boxShadow: '0px 12px 36px -4px aliceblue',

                          }}
                        
                        >
                            <img
                                src='surprizora 2.png'
                                alt='slide 2'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='embla__slide flex items-center justify-center '
                         style={{opaciit:1 -Math.pow(scrollProgress, 15) ,
                            boxShadow: '0px 12px 36px -4px aliceblue',
                            
                         }}
                        
                        
                        >
                            <img
                                src='surprizora 6.png'
                                alt='slide 2'
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
                <div className='text-center mt-8'>
                    <Link href="#question-section">
                        <button
                            className='bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 rounded-full border-b-8'
                        >
                            Take the questionnaire and begin the gift quest
                        </button>
                    </Link>
                </div>
            </section>

           <div className='bg-pink-300'>
            <section id="question-section" className='max-w-6xl mx-auto mt-20 p-4 bg-silver-300 h-screen'>
                <h2 className='text-center font-bold mb-4 text-black-100 text-6xl'>Let's Get Started, Shall We?</h2>
                <QuestionsPage />
                <div className='text-center mt-8'>
                    <Link href="#page-top">
                        <button
                            className='bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 rounded-full border-b-8'
                        >
                            Back to top
                        </button>
                    </Link>
                </div>
            </section>
            </div>
        </div>
    );
}
