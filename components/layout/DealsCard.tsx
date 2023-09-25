import Image from "next/image";
import React from 'react';

export type ServiceDealProps = {
  id: string;
  name: string;
  price: string;
  description: string;
  extra?: string;
  dealType: 'SALE' | 'DISCOUNT';
  car: string;
  image: string;
}

const CarDealCard = ({ name, price, description, extra, dealType, car, image }: React.HTMLAttributes<HTMLDivElement> & ServiceDealProps) => {
  return (
    <div className="relative grid grid-row-h grid-rows-6 grid-cols-2 w-auto h-full md:h-auto bg-gradient-to-b from-slate-100 to-gray-600 rounded-lg shadow-lg mx-auto max-w-md  text-white">
      {/* <Image className="absolute h-full w-full m-0" src={image} alt={name} height={400} width={300}></Image> */}
      <div className="row-span-1 text-sm font-medium leading-loose tracking-widest m-2">{car}</div>
      <div className="row-span-1 text-base text-center align-middle font-semibold rounded-full bg-red-600 m-2 flex items-center justify-center p-1">{dealType === 'SALE' ? '🔥' : '👌'}{dealType}</div>
      <div className="row-span-3 col-span-2 m-2  font-normal text-xs lg:text-sm">{description}</div>
      <div className="w-full row-span-2 col-span-2 m-2">
        <div className=" text-lg font-bold w-1/2 leading-loose">{name}</div>
        <div className="bg-darkblue w-32 text-center font-medium text-sm text-white rounded-full py-1 px-4 ">
          {price}
        </div>
      </div>
      <div className="row-span-1 col-span-2 flex justify-between text-xs gap-1 m-2">
        <p>{extra}</p>
      </div>
    </div>
  );
};

export default CarDealCard;
