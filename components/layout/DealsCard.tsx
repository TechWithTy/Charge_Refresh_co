import Image from "next/image";
import React from 'react';

export type CarDealProps= React.HTMLAttributes<HTMLDivElement>  & {

    carType: string;
    carPrice: string;
    carName: string;
    transmission: string;
    seating: string;
    fuelType: string;
    carImage: string;
}   

const CarDealCard = ({ carType, carName, carPrice, transmission, seating, fuelType , carImage}:CarDealProps) => {
  return (
    <div className="relative w-60 h-96 bg-white rounded-lg shadow-lg p-4 mx-auto max-w-md ">
        <Image className="absolute h-full w-full" src={carImage} alt={carName} height={400} width={300}></Image>
      <div className="text-lg font-semibold">{carType}</div>
      <div className="text-md mb-2">{carName}</div>
      <div className="bg-blue-500 text-white rounded-full py-2 px-4 text-sm mb-2">
        {carPrice}
      </div>
      <div className="flex justify-between text-sm">
        <div>
          <p>Transmission: {transmission}</p>
          <p>Seating: {seating}</p>
          <p>Fuel Type: {fuelType}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDealCard;
