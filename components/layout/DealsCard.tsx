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
    <div className="relative w-auto h-full md:lg:xl:h-96 bg-gradient-to-b from-slate-100 to-gray-600 rounded-lg shadow-lg mx-auto max-w-md  text-white">
      {/* <Image className="absolute h-full w-full m-0" src={image} alt={name} height={400} width={300}></Image> */}
      <div className="absolute left-0 top-0 text-sm font-medium ml-5 mt-5 leading-loose tracking-widest">{car}</div>
      <div className="absolute right-0 top-0 text-base text-center font-semibold mr-5 mt-5 rounded-full bg-red-600  p-4">{dealType === 'SALE' ? '🔥' : '👌'}{dealType}</div>
      <div className="absolute font-normal text-sm ml-5 top-10 mt-16">{description}</div>
      <div className="absolute left-0 top-1/2 w-full">
        <div className=" text-lg font-bold w-1/3 leading-loose mb-2 mt-4 ml-5">{name}</div>
        <div className="bg-darkblue w-1/6 text-center font-medium text-sm text-white rounded-full py-2 px-4 mb-2 mt-2 ml-5">
          {price}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex justify-between text-xs gap-1 mb-5 ml-5">
        <p>{extra}</p>
      </div>
    </div>
  );
};

export default CarDealCard;
