'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture"
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from 'react'
import { JsxElement } from "typescript"

function CarDealCarousel({ cards }: React.HTMLAttributes<HTMLDivElement> & { cards: React.ReactNode[] }) {

  const totalCards = cards.length;
  const [currentPage, setCurrentPage] = useState(0);
  const swiphandlers = useSwipe({ onSwipedLeft: prevSlide, onSwipedRight: nextSlide })

  function prevSlide() {
    setCurrentPage(prev => prev - 1)

  }
  function nextSlide() {
    setCurrentPage(prev => prev +1)
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className="flex w-full h-5/6 gap-5">
          {cards.slice(currentPage, currentPage + 3).map((card, index) => {
            return <div key={index} className="h-full w-2/6 px-5">{card}</div>
          })}
        </div>
        <div className="flex  h-1/6 w-full justify-center items-center align-middle gap-5">
          <button onClick={nextSlide} className="text-black dark:text-white py-2 px-4 border-none cursor-pointer">
            <ChevronLeft className=''></ChevronLeft>

          </button>
          {[0, 1, 2, 3].map((value, index) => {

            return <div key={index} className={`${index === currentPage ? 'w-20 bg-darkblue' : 'w-7 bg-gray-400'}  h-2 rounded-full`}></div>
          })}
          <button onClick={prevSlide} className="text-black dark:text-white py-2 px-4 border-none cursor-pointer">
            <ChevronRight className=''></ChevronRight>
          </button>
        </div>

      </div>
    </>
  )
}

export default CarDealCarousel