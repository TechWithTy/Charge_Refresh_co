'use client'
import React, { useState } from 'react'

export type FlipCarouselProps = React.HTMLAttributes<HTMLDivElement> & {

    slides: React.ReactNode[]
}
function FlipCarousel({ slides }: FlipCarouselProps) {
    const totalSlides = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateSlide, setAnimateSlide] = useState(false);


    const handleNextSlide = () => {
        // Implement logic to move to the next slides
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setAnimateSlide(true);
        setTimeout(() => {
            setAnimateSlide(false);
        }, 2000);
    };

    const handlePrevSlide = () => {
        // Implement logic to move to the previous slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setAnimateSlide(true);

        setTimeout(() => {
            setAnimateSlide(false);
        }, 2000);

    };
    return (
        <>
            <div className="relative overflow-hidden w-full h-full z-50">
                <div className="h-full transition-transform duration-500 ease-in-out">
                    <div className="flex h-full items-center justify-center">
                        <div
                            className={`absolute h-full w-[40%] top-16 rounded-custom overflow-hidden bg-gradient-to-b from-gray-600 to-neutral-300`}
                        >
                        </div>
                        <div
                            className={`absolute h-full w-[50%] top-10 rounded-custom overflow-hidden bg-gradient-to-b from-gray-600 to-neutral-400`}
                        >
                        </div>
                        <div
                            className={`absolute h-full w-[60%] top-2 rounded-custom overflow-hidden ${animateSlide ? 'animate-slide-up-fade-away' : 'block'}`}
                        >
                            {slides[currentIndex]}
                        </div>
                        <div
                            className={`absolute h-full w-[60%] top-2 rounded-custom overflow-hidden ${animateSlide ? 'animate-slide-up-fade' : 'hidden'}`}
                        >
                            {slides[currentIndex >= slides.length ? 0 : currentIndex + 1]}
                        </div>
                    </div>
                </div>
                <button onClick={handlePrevSlide} className="absolute top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black text-white py-2 px-4 border-none cursor-pointer left-0">
                    Previous
                </button>
                <button onClick={handleNextSlide} className="absolute top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black text-white py-2 px-4 border-none cursor-pointer right-0">
                    Next
                </button>
            </div>

        </>
    )
}

export default FlipCarousel