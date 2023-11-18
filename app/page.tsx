import CarSelectionDropdown from "@/components/carSelection";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Card from "@/components/home/card";
import { ArrowRight, PhoneCall } from "lucide-react";
import { carDealsList, carList, cardData } from "data/sample";
import TrendingChip from "@/components/home/trendingChip";
import CarGalleryCarousel from "@/components/home/heroCarousel";
import CarDealCard from "@/components/layout/DealsCard";
import { freshDeals } from "data/sample";
import FlipCarousel from "@/components/FlipCarousel";
import CarDealCarousel from "@/components/layout/CarDealCarousel";
import LeadForm from "@/components/LeadForm";
import ContactForm from "@/components/contactForm";

export default async function Home() {
  return (
    <>
      <section className="z-30 w-full bg-gray-100 pb-10 font-mont">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 ">
          {/* Text on the left */}
          <div className="overflow-visible pt-10 text-center lg:pt-24 lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <TrendingChip trending={"Tesla Model S"} />
            </div>
            <div className="ml-2 mt-4 text-4xl font-bold leading-normal text-black lg:mb-4 lg:text-6xl">
              <span>
                <Balancer>Elevate Your Car`s Shine</Balancer>
              </span>
              <span>
                <Balancer>with Earth-Friendly</Balancer>
              </span>
              <span>
                <Balancer>Detailing!</Balancer>
              </span>
            </div>
            <Balancer className="mx-2 mt-2 text-sm font-normal text-gray-600 lg:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              mattis erat. Vivamus quis commodo metus. Nullam nec justo id leo
              finibus dapibus.
            </Balancer>
            <div className="z-50 mt-4 w-full lg:mt-8">
              <CarSelectionDropdown />
            </div>
            <div className="mx-2 mt-4 flex lg:mt-10">
              <Balancer className="mx-2 text-blue-500">
                Try advanced search
              </Balancer>
              <ArrowRight className="mx-2" color="blue" />
            </div>
            <div className="mx-2 my-5">
              <Balancer className="text-sm font-medium text-gray-600">
                Popular Brands
              </Balancer>
              <div className="text-xl font-bold">
                {carList.slice(0, 4).map((car, index) => {
                  return (
                    <Balancer className="mr-4" key={index}>
                      {car}
                    </Balancer>
                  );
                })}
                <Balancer className="text-gray-400">
                  {carList.length - 4}+ more
                </Balancer>
              </div>
            </div>
          </div>
          {/* Image on the right */}
          <div className="flex h-full text-center lg:text-left">
            <Image
              src="/hero.png" // Replace with your image URL
              alt="Illustration"
              className="h-auto w-full self-center rounded-lg  shadow-lg"
              width={843}
              height={780}
            />
          </div>
        </div>
      </section>

      <section className="z-30 w-full bg-gray-100 bg-corner-blue bg-[length:300px_300px] bg-right-top bg-no-repeat pb-5 pt-10 md:py-24 xl:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 ">
          {/* Image on the right */}
          <div className="bg-inherit py-8 pr-0 shadow-none md:py-16 md:pr-24 xl:py-24">
            <img
              src="/section-2.png" // Replace with your image URL
              alt="Illustration"
              className="h-auto w-full rounded-e-lg shadow-lg"
            />
          </div>

          <div className="flex h-full flex-col py-8 align-top md:py-16 xl:py-24">
            <div className="">
              <div className="m-4 flex flex-col text-2xl font-bold text-black md:m-4 md:text-3xl xl:text-4xl ">
                <span>
                  <Balancer>About the Charge Refresh</Balancer>
                </span>
              </div>
              <p className="w-full p-4 text-gray-600  md:w-1/2 md:p-4 xl:w-2/3">
                Our mission is to revolutionize car cleaning with a seamless
                user experience. We envision customers having a Sustainable,
                convenient, and top-quality detailing services. Founded by
                industry professionals with a focus on innovation and
                sustainability.
              </p>
            </div>
            <div className="flex min-h-fit flex-col gap-4 lg:-ml-[300px] lg:flex-row">
              {cardData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    demo={item.icon}
                  ></Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="z-30 w-full bg-gray-100 py-10 md:py-24 lg:max-h-screen">
        <div className="container mx-auto grid h-full grid-cols-1 grid-rows-2 items-center gap-1 px-4 lg:grid-cols-2  lg:grid-rows-1">
          {/* Image on the right */}
          <div className="ml-0 h-fit bg-inherit shadow-none lg:ml-10 ">
            <div className="items-center p-5 md:p-10">
              <div className="my-4 flex flex-col text-xl font-bold text-black md:m-10 md:text-3xl">
                <span>
                  <Balancer>Basic Wash</Balancer>
                </span>
              </div>
              <p className="w-full text-gray-600 lg:p-10">
                Our Basic Wash is designed for those who want a quick refresh
                for their Tesla. Using top-tier, eco-friendly cleaning agents,
                we ensure the removal of surface dirt and grime, leaving your
                vehicle with a clean and glossy finish. Ideal for regular
                maintenance, this service ensures your Tesla looks good without
                taking up too much of your time.
              </p>

              <div className="my-4 flex h-16 w-40 items-center justify-center rounded-lg bg-darkblue text-center align-middle text-white shadow-2xl shadow-blue-300 md:m-10">
                <p className="inline-block text-center align-bottom">
                  Discover More
                </p>
              </div>
            </div>
          </div>

          <div className="z-30 h-full lg:px-10">
            <FlipCarousel
              slides={[
                <Image
                  key={"car1"}
                  className="m-0 h-full w-full object-cover"
                  src={"/hero.png"}
                  alt={"slide"}
                  height={400}
                  width={300}
                ></Image>,
                <Image
                  key={"car2"}
                  className="m-0 h-full w-full object-cover"
                  src={"/section-2.png"}
                  alt={"slide"}
                  height={400}
                  width={300}
                ></Image>,
                <Image
                  key={"car1"}
                  className="m-0 h-full w-full object-cover"
                  src={"/authjs.webp"}
                  alt={"slide"}
                  height={400}
                  width={300}
                ></Image>,
              ]}
            ></FlipCarousel>
          </div>
        </div>
      </section>

      <section className="relative z-30 my-10  w-full bg-gray-100 leading-normal lg:max-h-screen">
        <div className="absolute -z-10 h-full w-full rotate-180 transform bg-corner-blue bg-[length:300px_300px] bg-right-top bg-no-repeat"></div>
        <div className="container mx-auto h-fit items-center px-4">
          <div className=" flex-col items-center gap-1 ">
            <div className="m-2 mb-10 w-full text-center text-5xl font-bold">
              <Balancer>Add Ons</Balancer>
            </div>
            <div className="m-2 flex w-full items-center justify-center text-center text-base font-normal">
              <Balancer className="w-1/2">
                Explore Addons To Make Your Experience More Seamless.
              </Balancer>
            </div>
          </div>
          <div className="h-96 w-full py-5 lg:h-auto">
            <CarDealCarousel cards={carDealsList}></CarDealCarousel>
          </div>
        </div>
        <LeadForm></LeadForm>
      </section>

      <section className="relative z-10 my-10 h-fit max-h-screen w-full bg-gray-100 font-mont leading-normal md:my-20 lg:my-24">
        <div className="container mx-auto grid min-h-fit grid-cols-1 grid-rows-2 items-center px-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8">
          <div className="h-full w-full md:px-10 ">
            <FlipCarousel slides={[]}></FlipCarousel>
          </div>
          <div className="h-fit w-full p-5 md:p-10">
            <div className="m-2 text-center md:text-left">
              Elon R. - Palo Alto, CA- ⭐⭐⭐⭐⭐
            </div>
            <div className="m-2 text-center text-3xl font-bold md:text-left md:text-5xl">
              <h1>Ultimate Detailing Package</h1>
            </div>
            <div className="m-2 text-center text-base md:text-left md:text-lg">
              <Balancer>
                {
                  "I`ve used many detailing services in the past, but none come close to Charge Refresh. The attention to detail, especially with the Ultimate Detailing Package, is impeccable. My Model S looks and feels brand new every time."
                }
              </Balancer>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:first-letter relative z-10 w-full bg-gray-100 py-10 font-mont leading-normal md:py-20 lg:py-24 xl:py-32">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden align-middle lg:min-h-max lg:flex-row">
          <div className="flex h-1/2 w-full flex-col justify-center rounded bg-darkblue  text-center align-middle md:text-left lg:absolute lg:rounded-3xl">
            <div className="w-full px-4  py-4 text-3xl font-bold text-white md:px-10 md:py-10 md:text-5xl lg:w-1/2">
              Have any questions about us?
            </div>
            <div className="my-2 flex w-full justify-center rounded bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 md:my-4 md:px-10 md:py-4 md:text-base  lg:mx-4 lg:w-1/3">
              <PhoneCall fill="blue" className="p-1" color="blue" />
              +1 23 456 789123
            </div>
          </div>
          <div className="w-full  p-6 lg:relative lg:min-h-fit  lg:w-1/2 lg:translate-x-1/2 lg:transform ">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
    </>
  );
}
