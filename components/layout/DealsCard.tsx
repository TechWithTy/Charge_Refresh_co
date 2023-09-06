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
    <div className="relative w-60 h-96 bg-white rounded-lg shadow-lg mx-auto max-w-md  text-white">
        <Image className="absolute h-full w-full m-0" src={carImage} alt={carName} height={400} width={300}></Image>
      <div className="absolute left-0 top-0 text-lg font-semibold ml-5">{carType}</div>
      <div className="absolute left-0 top-48 text-md mb-2 mt-4 ml-5">{carName}</div>
      <div className="absolute left-0 top-56 bg-blue-500 text-white rounded-full py-2 px-4 text-sm mb-2 mt-8 ml-5">
        {carPrice}
      </div>
      <div className="absolute bottom-0 left-0 flex justify-between text-sm gap-1 mb-5 ml-5">
          <p>Transmission: {transmission}</p>
          <p>Seating: {seating}</p>
          <p>Fuel Type: {fuelType}</p>
      </div>
    </div>
  );
};

export default CarDealCard;
