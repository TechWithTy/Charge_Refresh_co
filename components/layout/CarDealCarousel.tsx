'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture"
import React, { useState } from 'react'
import { JsxElement } from "typescript"

function CarDealCarousel({ cards }: React.HTMLAttributes<HTMLDivElement> & { cards: React.ReactNode[] }) {

  const [currentPage, setCurrent] = useState(0);
  const swiphandlers = useSwipe({ onSwipedLeft: prevSlide, onSwipedRight: nextSlide })

  function prevSlide() {

  }
  function nextSlide() {

  }
  return (
    <>
      <div className='flex flex-col justify-center h-full w-full'>
        <div className="flex w-full h-5/6 gap-5">
          {cards.slice(currentPage, currentPage + 3).map((card, index) => {
            return <div key={index} className="h-full w-2/6 px-5">{card}</div>
          })}
        </div>
        <div className="h-1/6 w-full">
          {[0, 1, 2, 3].map((value, index) => {

            return <div className={`${index == currentPage ? 'w-1/3' : 'w-1/4'}`}></div>
          })}
        </div>
      </div>
    </>
  )
}

export default CarDealCarousel