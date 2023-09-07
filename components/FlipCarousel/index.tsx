'use client'
import React, { useState } from 'react'

export type FlipCarouselProps = React.HTMLAttributes<HTMLDivElement> & {

    slides: React.ReactNode[]
}
function FlipCarousel({ slides }: FlipCarouselProps) {
    const totalSlides = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
        // Implement logic to move to the next slides
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);

    };

    const handlePrevSlide = () => {
        // Implement logic to move to the previous slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };
    return (
        <>
            <div className="relative overflow-hidden w-full h-full z-50">
                <div className="h-full transition-transform duration-500 ease-in-out">
                    <div className="flex items-center justify-center">
                            <div
                                className={`absolute h-80 w-[42%] top-8 rounded-md bg-gradient-to-b from-gray-400 to-neutral-200`}
                            >
                            </div>
                            <div
                                className={`absolute h-80 w-[46%] top-5 rounded-md bg-gradient-to-b from-gray-400 to-neutral-300`}
                            >
                            </div>
                            <div
                                className={`absolute h-80 w-[50%] top-2 rounded-md animate-fade-up`}
                            >
                                {slides[currentIndex]}
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