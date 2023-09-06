import CarSelectionDropdown from "@/components/carSelection";
import Balancer from "react-wrap-balancer";
import Image from 'next/image'
import Card from "@/components/home/card";
import { ArrowRight } from "lucide-react";
import { carList, cardData } from "data/sample";
import TrendingChip from "@/components/home/trendingChip";
import CarGalleryCarousel from "@/components/home/heroCarousel";
import CarDealCard from "@/components/layout/DealsCard";
import { carDataList } from "data/sample";


export default async function Home() {


  return (
    <>

      <section className="z-30 bg-gray-100 px-1 pb-10 w-full h-screen font-mont">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text on the left */}

          <div className="overflow-visible ml-10 pt-24">
            <div className="">
              <TrendingChip trending={"2020 Ford Mustang"} />
            </div>
            <div className="flex flex-col text-6xl text-black leading-normal font-bold mb-4 ml-2">
              <span>
                <Balancer>Say hello to best</Balancer>
              </span>
              <span>
                <Balancer> car dealer platform</Balancer>
              </span>
              <Balancer className="text-gray-600 font-normal text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis erat. Vivamus
                quis commodo metus. Nullam nec justo id leo finibus dapibus.
              </Balancer>
            </div>

            <div className="z-50 w-screen">
              <CarSelectionDropdown></CarSelectionDropdown>
            </div>
            <div className="flex my-10 mx-2 ">
              <Balancer className="mx-2 text-blue-500">Try advanced search</Balancer>
              <ArrowRight className="mx-2" color="blue" />
            </div>
            <div className="mx-2">
              <Balancer className="font-medium text-sm text-gray-600">Popular Brands</Balancer>
              <div className="font-bold text-xl">
                {carList.slice(0, 4).map((car, index) => {
                  return <Balancer className="mr-4" key={index}>{car}</Balancer>

                })}
                <Balancer className="text-gray-400">{carList.length - 4}+ more</Balancer>
              </div>


            </div>
          </div>
          {/* Image on the right */}
          <div className="h-full -z-30 bg-inherit shadow-none">
            <CarGalleryCarousel className="h-full rounded-custom-bl bg-gray-300 overflow-hidden"></CarGalleryCarousel>
            {/* <Image
              src="/hero.png" // Replace with your image URL
              alt="Illustration"
              className="w-full h-auto rounded-sm shadow-lg "
              width={300}
              height={300}
            />*/}
          </div>
        </div>
      </section>


      <section className="z-30 bg-gray-100 px-1 py-10 w-full h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image on the right */}
          <div className="bg-inherit shadow-none pr-24">
            <Image
              src="/section-2.png" // Replace with your image URL
              alt="Illustration"
              className="w-full h-auto shadow-lg rounded-custom-r"
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col align-top h-full">
            <div className="">
              <div className="flex flex-col text-3xl text-black font-bold m-10">
                <span>
                  <Balancer>About the Mobhil</Balancer>
                </span>
              </div>
              <p className="text-gray-600 m-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis erat. Vivamus
                quis commodo metus. Nullam nec justo id leo finibus dapibus.
              </p>
            </div>
            <div className="flex md:lg:-ml-48 md:lg:right-0">
              {
                cardData.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      title={item.title}
                      description={item.description}
                      demo={item.icon}
                    ></Card>
                  )
                })
              }

            </div>

          </div>

        </div>
      </section>
      <section className="z-30 bg-gray-100 px-1 py-10 w-full h-screen leading-normal">
        <div className=" flex-col gap-1 items-center">
          <div className="font-bold text-5xl w-full text-center m-2 mb-10">
            <Balancer>Top deals of the week</Balancer>
          </div>
          <div className="font-normal text-base w-full text-center flex items-center justify-center m-2">
            <Balancer className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Balancer>
          </div>
        </div>
        <div>
          <CarDealCard carName={carDataList[0].carName} 
              carPrice={carDataList[0].carPrice}
              carType={carDataList[0].carType} 
              fuelType={carDataList[0].fuelType}
              seating={carDataList[0].seating} 
              transmission={carDataList[0].transmission}
              carImage={carDataList[0].imageUrl}></CarDealCard>
        </div>
      </section>
    </>

  );
}

