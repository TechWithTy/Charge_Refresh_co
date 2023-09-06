import React from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
const CarGalleryCarousel = ({ className }: { className?: string }) => {
    const carData = [
        {
            id: 1,
            carType: 'Sports Car',
            carName: 'Porsche GT',
            startingPrice: '$150,000',
            imageUrl: '/hero.png', // Replace with actual image URL
        },
        // Add more car data objects as needed
    ];

    return (
        <div className={className + ' font-mont'}>
            <div className="h-full w-full rounded-none" >
                {carData.map((car) => (
                    <div key={car.id} className="h-full w-full relative">
                        {/* Car image */}
                        <Image className="w-full h-full rounded-none" src={car.imageUrl} alt={car.carName} width={400} height={500} />

                        {/* Car type and name */}
                        <div className="absolute top-0 left-0 p-2 text-white ml-10 mt-10">
                            <p className="text-sm font-semibold">{car.carType}</p>
                            <p className="text-3xl leading-normal">{car.carName}</p>
                        </div>

                        {/* Starting price */}
                        <div className="absolute top-0 right-0 p-2  text-white mt-10 mr-10">
                            <p className="font-light text-sm text-right">Starting At</p>
                            <p className="text-3xl leading-normal font-bold ">{car.startingPrice}</p>
                        </div>

                        {/* Discover more button */}
                        <div className="absolute bottom-0 left-0 p-2  text-white ml-10 mb-10">
                            <button className="text-lg leading-normal font-semibold">DISCOVER MORE</button>
                        </div>
                        {/*control buttons*/}
                        <div className="absolute bottom-0 right-0 p-2  text-white mr-10 mb-10">
                            <button className="text-lg leading-normal font-semibold mx-5">
                                <ChevronLeft></ChevronLeft>
                            </button>
                            <button className="text-lg leading-normal font-semibold mx-5">
                                <ChevronRight></ChevronRight>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarGalleryCarousel;
