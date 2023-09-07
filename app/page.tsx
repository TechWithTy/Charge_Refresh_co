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
import FlipCarousel from "@/components/FlipCarousel";


export default async function Home() {


  return (
    <>

      <section className="z-30 bg-gray-100 px-1 pb-10 w-full h-screen font-mont">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text on the left */}

          <div className="overflow-visible ml-10 pt-24">
            <div className="">
              <TrendingChip trending={"Tesla Model S"} />
            </div>
            <div className="flex flex-col text-6xl text-black leading-normal font-bold mb-4 ml-2">
              <span>
                <Balancer>Elevate Your Cars Shine </Balancer>
              </span>
              <span>
                <Balancer>with Earth-Friendly</Balancer>
              </span>
              <span>
                <Balancer>Detailing!</Balancer>
              </span>
              <Balancer className="text-gray-600 font-normal text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis erat. Vivamus
                quis commodo metus. Nullam nec justo id leo finibus dapibus.
              </Balancer>
            </div>

            <div className="z-50 w-full">
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
          <div className="flex justify-center h-full text-center align-middle -z-30 bg-inherit shadow-none p-8 ">
            <Image
              src="/hero.png" // Replace with your image URL
              alt="Illustration"
              className="w-full h-auto rounded-lg shadow-lg self-center"
              width={843}
              height={780}
            />
          </div>
        </div>
      </section>


      <section className="z-30 bg-gray-100 px-1 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image on the right */}
          <div className="bg-inherit shadow-none pr-24">
            <Image
              src="/section-2.png" // Replace with your image URL
              alt="Illustration"
              className="w-full h-auto shadow-lg rounded-e-lg"
              width={715}
              height={898}
            />
          </div>

          <div className="flex flex-col align-top h-full">
            <div className="">
              <div className="flex flex-col text-3xl text-black font-bold m-10">
                <span>
                  <Balancer>About the Charge Refresh</Balancer>
                </span>
              </div>
              <p className="text-gray-600 m-10 w-1/2">
                Our mission is to  revolutionize car cleaning with a seamless user experience. We envision customers having  a Sustainable, convenient, and top-quality detailing services. Founded by industry professionals with a focus on innovation and sustainability.
              </p>
            </div>
            <div className="flex h-1/2 md:lg:-ml-[300px]">
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
      <section className="z-30 bg-gray-100 px-1 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image on the right */}
          <div className="bg-inherit shadow-none ml-10">
            <div className="">
              <div className="flex flex-col text-3xl text-black font-bold m-10">
                <span>
                  <Balancer>Basic Wash</Balancer>
                </span>
              </div>
              <p className="text-gray-600 m-10 w-3/4">
                Our Basic Wash is designed for those who want a quick refresh for their Tesla. Using top-tier, eco-friendly cleaning agents, we ensure the removal of surface dirt and grime, leaving your vehicle with a clean and glossy finish. Ideal for regular maintenance, this service ensures your Tesla looks good without taking up too much of your time.
              </p>

              <div className="text-center align-middle bg-darkblue w-40 h-16 text-white m-10 rounded-lg shadow-2xl  shadow-blue-300">
                  <span>Discover More</span>
              </div>
            </div>
          </div>

          <div className="h-full w-full z-30">
            <FlipCarousel 
              slides={[
                <Image className="h-full w-full m-0" src={'/hero.png'} alt={"slide"} height={400} width={300}></Image>,
                <Image className="h-full w-full m-0" src={'/section-2.png'} alt={"slide"} height={400} width={300}></Image>,
                <Image className="h-full w-full m-0" src={'/hero.png'} alt={"slide"} height={400} width={300}></Image>,
              ]}
            ></FlipCarousel>
          </div>

        </div>
      </section>
      <section className="z-30 bg-gray-100 px-1 py-10 w-full max-h-screen leading-normal">
        <div className=" flex-col gap-1 items-center">
          <div className="font-bold text-5xl w-full text-center m-2 mb-10">
            <Balancer>Add Ons</Balancer>
          </div>
          <div className="font-normal text-base w-full text-center flex items-center justify-center m-2">
            <Balancer className="w-1/2">
            Explore Addons To Make Your Experience More Seamless.
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

