'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture"
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from 'react'
import { JsxElement } from "typescript"

function CarDealCarousel({ cards }: React.HTMLAttributes<HTMLDivElement> & { cards: React.ReactNode[] }) {

  const totalPages = cards.length % 3 === 0 ? cards.length / 3 : cards.length / 3 + 1;
  const [currentPage, setCurrentPage] = useState(0);
  const swipehandlers = useSwipe({ onSwipedLeft: prevSlide, onSwipedRight: nextSlide })

  function prevSlide() {
    setCurrentPage(prev => prev == 0 ? totalPages-1 : prev - 1)

  }
  function nextSlide() {
    setCurrentPage(prev => prev == totalPages-1 ? 0 : prev + 1)
  }
  return (
    <>
      <div {...swipehandlers} className='flex flex-col justify-center items-center h-full w-full z-50'>
        <div className="flex w-full h-5/6 gap-5">
          {cards.slice(currentPage * 3, currentPage * 3 + 3).map((card, index) => {
            return <div key={index} className="h-full w-2/6 px-5">{card}</div>
          })}
        </div>
        <div className="flex  h-1/6 w-full justify-center items-center align-middle gap-5">
          <button onClick={prevSlide} className="text-black dark:text-white py-2 px-4 border-none cursor-pointer">
            <ChevronLeft className=''></ChevronLeft>
          </button>
          {(new Array(totalPages).fill(1)).map((value, index) => {
            return <div key={index} className={`${index === currentPage ? 'w-20 bg-darkblue' : 'w-7 bg-gray-400'}  h-2 rounded-full`}></div>
          })}
          <button onClick={nextSlide} className="text-black dark:text-white py-2 px-4 border-none cursor-pointer">
            <ChevronRight className=''></ChevronRight>
          </button>
        </div>

      </div>
    </>
  )
}

export default CarDealCarousel