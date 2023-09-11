'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import React, { useState } from 'react'

export type FlipCarouselProps = React.HTMLAttributes<HTMLDivElement> & {

    slides: React.ReactNode[]
}
function FlipCarousel({ slides }: FlipCarouselProps) {
    const totalSlides = slides.length;
    const [animate, setAnimate] = useState<'next' | 'prev'>('next');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateSlide, setAnimateSlide] = useState(false);
    const [prevIndex, setPrevIndex] = useState(totalSlides - 1);
    const [nextIndex, setNextIndex] = useState(1);
    const swipeHandler = useSwipe({ onSwipedLeft: handlePrevSlide, onSwipedRight: handleNextSlide })


    function handleNextSlide ()  {
        // Implement logic to move to the next slides
        
        setAnimate('next');

        setNextIndex((index) => index == totalSlides - 1 ? 0 : (index + 1));

        setAnimateSlide(true);
        setTimeout(() => {
            setCurrentIndex((index) => index == totalSlides - 1 ? 0 : (index + 1));
            setAnimateSlide(false);
        }, 500);
    };

    function handlePrevSlide () {
        // Implement logic to move to the previous slide
        setAnimate('prev');

        setPrevIndex((index) => index == 0 ? totalSlides - 1 : (index - 1))


        setAnimateSlide(true);
        setTimeout(() => {
            setCurrentIndex((index) => index == 0 ? totalSlides - 1 : (index - 1));
            setAnimateSlide(false);
        }, 500);

    };
    return (
        <>
            <div {...swipeHandler} className="relative flex flex-col-reverse  justify-center items-center overflow-x-hidden h-full w-full z-50 ">
                <div className="flex flex-row justify-around items-center h-1/3">
                    <button onClick={handlePrevSlide} className=" text-black dark:text-white  py-2 px-4 border-none cursor-pointer left-0">
                        <ChevronLeft className=''></ChevronLeft>
                    </button>
                    <div className="flex flex-row justify-evenly ">{
                        [0, 1, 2].map((value, index) => {
                            return <Circle key={index} className={`text-slate-500`} fill={`${index === currentIndex ? 'blue' : 'transparent'}`}></Circle>
                        })

                    }</div>
                    <button onClick={handleNextSlide} className="text-black dark:text-white py-2 px-4 border-none cursor-pointer right-0">
                        <ChevronRight className=''></ChevronRight>
                    </button>
                </div>
                <div className="relative h-2/3 w-11/12">
                    <div className="flex h-full items-center justify-center">
                        <div
                            className={`absolute h-full w-[54%] top-16 rounded-custom overflow-hidden bg-gradient-to-b from-gray-600 to-neutral-300`}
                        >
                        </div>
                        <div
                            className={`absolute h-full w-[72%] top-10 rounded-custom overflow-hidden bg-gradient-to-b from-gray-600 to-neutral-400`}
                        >
                        </div>
                        <div
                            className={`absolute h-full w-[90%] top-2 rounded-custom overflow-hidden ${!animateSlide ? 'block' : animate === 'next' ? 'animate-slide-right-fade-away': 'animate-slide-left-fade-away' }`}
                        >
                        {slides[currentIndex]}
                    </div>
                    {animate === 'next' ? <div
                        className={`absolute h-full w-[90%] top-2 rounded-custom overflow-hidden ${!animateSlide ? 'hidden' : 'animate-slide-right-fade' }`}
                    >
                        {slides[nextIndex]}
                    </div> : <div
                        className={`absolute h-full w-[90%] top-2 rounded-custom overflow-hidden ${!animateSlide ? 'hidden' :  'animate-slide-left-fade' }`}
                    >
                        {slides[prevIndex]}
                    </div>}
                </div>
            </div>

        </div >

        </>
    )
}

export default FlipCarousel