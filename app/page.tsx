import CarSelectionDropdown from "@/components/carSelection";
import Balancer from "react-wrap-balancer";
import Image from 'next/image'
import Card from "@/components/home/card";
import { ArrowRight, PhoneCall } from "lucide-react";
import { carDealsList, carList, cardData } from "data/sample";
import TrendingChip from "@/components/home/trendingChip";
import CarGalleryCarousel from "@/components/home/heroCarousel";
import CarDealCard from "@/components/layout/DealsCard";
import { freshDeals } from "data/sample";
import FlipCarousel from "@/components/FlipCarousel";
import ContactForm from "@/components/ContactForm";
import CarDealCarousel from "@/components/layout/CarDealCarousel";
import LeadForm from "@/components/LeadForm";


export default async function Home() {


  return (
    <>

      <section className="z-30 bg-gray-100 w-full pb-10 font-mont">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center container mx-auto px-4 ">
          {/* Text on the left */}
          <div className="overflow-visible pt-10 lg:pt-24 text-center lg:text-left">
            <div className="">
              <TrendingChip trending={"Tesla Model S"} />
            </div>
            <div className="text-4xl lg:text-6xl text-black leading-normal font-bold mt-4 lg:mb-4 ml-2">
              <span>
                <Balancer>Elevate Your Car's Shine</Balancer>
              </span>
              <span>
                <Balancer>with Earth-Friendly</Balancer>
              </span>
              <span>
                <Balancer>Detailing!</Balancer>
              </span>
            </div>
            <Balancer className="text-gray-600 font-normal text-sm mt-2 lg:mt-4 mx-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis erat. Vivamus quis commodo metus. Nullam nec justo id leo finibus dapibus.
            </Balancer>
            <div className="z-50 mt-4 lg:mt-8 w-full">
              <CarSelectionDropdown />
            </div>
            <div className="flex mt-4 lg:mt-10 mx-2">
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
          <div className="h-full text-center lg:text-left">
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



      <section className="z-30 bg-gray-100 py-16 md:py-24 xl:py-32 w-full bg-corner-blue bg-[length:55vh_55vh] bg-right-top bg-no-repeat">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center container mx-auto px-4 ">
          {/* Image on the right */}
          <div className="bg-inherit shadow-none pr-0 md:pr-24 py-8 md:py-16 xl:py-24">
            <img
              src="/section-2.png" // Replace with your image URL
              alt="Illustration"
              className="w-full h-auto shadow-lg rounded-e-lg"
            />
          </div>

          <div className="flex flex-col align-top h-full py-8 md:py-16 xl:py-24">
            <div className="">
              <div className="flex flex-col text-2xl md:text-3xl xl:text-4xl text-black font-bold m-4 md:m-4 ">
                <span>
                  <Balancer>About the Charge Refresh</Balancer>
                </span>
              </div>
              <p className="text-gray-600 p-4 md:p-4  w-full md:w-1/2 xl:w-2/3">
                Our mission is to revolutionize car cleaning with a seamless user experience. We envision customers having a Sustainable, convenient, and top-quality detailing services. Founded by industry professionals with a focus on innovation and sustainability.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row min-h-fit lg:-ml-[300px]">
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

      <section className="z-30 bg-gray-100 py-10 md:py-24 w-full lg:max-h-screen">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-8 items-center container mx-auto px-4  h-full">
          {/* Image on the right */}
          <div className="bg-inherit shadow-none ml-0 md:ml-10 h-full">
            <div className="p-5 md:p-10 items-center">
              <div className="flex flex-col text-xl md:text-3xl text-black font-bold m-4 md:m-10">
                <span>
                  <Balancer>Basic Wash</Balancer>
                </span>
              </div>
              <p className="text-gray-600 p-4 md:p-10 w-full md:w-3/4">
                Our Basic Wash is designed for those who want a quick refresh for their Tesla. Using top-tier, eco-friendly cleaning agents, we ensure the removal of surface dirt and grime, leaving your vehicle with a clean and glossy finish. Ideal for regular maintenance, this service ensures your Tesla looks good without taking up too much of your time.
              </p>

              <div className="flex justify-center items-center text-center align-middle bg-darkblue w-40 h-16 text-white m-4 md:m-10 rounded-lg shadow-2xl shadow-blue-300">
                <p className="inline-block align-bottom text-center">Discover More</p>
              </div>
            </div>
          </div>

          <div className="h-full z-30 lg:px-10">
            <FlipCarousel
              slides={[
                <Image className="h-full w-full m-0" src={'/hero.png'} alt={"slide"} height={400} width={300}></Image>,
                <Image className="h-full w-full m-0" src={'/section-2.png'} alt={"slide"} height={400} width={300}></Image>,
                <Image className="h-full w-full m-0" src={'/authjs.webp'} alt={"slide"} height={400} width={300}></Image>,
              ]}
            ></FlipCarousel>
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-gray-100  py-10 w-full lg:max-h-screen leading-normal">
        <div className="absolute w-full h-full bg-corner-blue bg-no-repeat bg-right-top bg-[length:55vh_55vh] transform rotate-180 -z-10">
        </div>
        <div className="items-center container mx-auto px-4 h-fit">
          <div className=" flex-col gap-1 items-center ">
            <div className="font-bold text-5xl w-full text-center m-2 mb-10">
              <Balancer>Add Ons</Balancer>
            </div>
            <div className="font-normal text-base w-full text-center flex items-center justify-center m-2">
              <Balancer className="w-1/2">
                Explore Addons To Make Your Experience More Seamless.
              </Balancer>
            </div>
          </div>
          <div className="w-full h-screen lg:h-auto py-5">
            <CarDealCarousel
              cards={carDealsList}
            ></CarDealCarousel>
          </div>
        </div>
        <LeadForm></LeadForm>

      </section>

      <section className="relative z-10 bg-gray-100 py-10 md:py-20 lg:py-24 xl:py-32 w-full h-[70vh] max-h-screen leading-normal font-mont">
        <div className="flex flex-col md:flex-row justify-center items-center container mx-auto px-4  h-full">
          <div className="w-full md:w-1/2 h-3/4 lg:px-10">
            <FlipCarousel slides={[]}></FlipCarousel>
          </div>
          <div className="w-full md:w-1/2 h-3/4 p-5 md:p-10">
            <div className="m-1 text-center md:text-left">Elon R. - Palo Alto, CA- ⭐⭐⭐⭐⭐</div>
            <div className="text-3xl md:text-5xl font-bold m-1 text-center md:text-left">
              <h1>Ultimate Detailing Package</h1>
            </div>
            <div className="text-base md:text-lg m-1 text-center md:text-left">
              <Balancer>
                "I've used many detailing services in the past, but none come close to Charge Refresh. The attention to detail, especially with the Ultimate Detailing Package, is impeccable. My Model S looks and feels brand new every time."
              </Balancer>
            </div>
          </div>
        </div>
      </section>


      <section className="relative z-10 bg-gray-100 py-10 md:py-20 lg:py-24 xl:py-32 w-full lg:first-letter leading-normal font-mont">
        <div className="relative flex flex-col lg:flex-row justify-center items-center align-middle lg:min-h-max w-full overflow-hidden">
          <div className="lg:absolute flex flex-col align-middle justify-center w-full h-1/2  bg-darkblue rounded lg:rounded-3xl text-center md:text-left">
            <div className="w-full lg:w-1/2  text-white text-3xl md:text-5xl font-bold py-4 md:py-10 px-4 md:px-10">
              Have any questions about us?
            </div>
            <div className="w-full lg:w-1/3 lg:mx-4 flex justify-center text-sm md:text-base font-bold rounded bg-blue-50 text-blue-700 py-2 md:py-4 px-4 md:px-10  md:my-4 my-2">
              <PhoneCall fill="blue" className="p-1" color="blue" />
              +1 23 456 789123
            </div>
          </div>
          <div className="lg:relative  lg:min-h-fit w-full lg:w-1/2  lg:transform lg:translate-x-1/2 p-6 ">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>


    </>

  );
}

