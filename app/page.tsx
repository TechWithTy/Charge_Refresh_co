import CarSelectionDropdown from "@/components/carSelection";
import Balancer from "react-wrap-balancer";
import Image from 'next/image'
import Card from "@/components/home/card";


const cardData = [
  {
    title: "Quick and Easy Scheduling",
    description: "Time is of the essence, and we respect that. Our services are designed for rapid response and efficiency. With our intuitive online platform, scheduling an appointment is just a few clicks away.",
    icon: <Image src={'/doubleRigthChevron.svg'} alt="chevron_right" width={50} height={50}></Image>
  },
  {
    title: "Earth Friendly",
    description: "Our commitment to the environment goes beyond just words. We incorporate eco-friendly practices at every step, from the products we use to the processes we adopt. ",
    icon: <Image src={'/green.svg'} alt="chevron_right" width={50} height={50}></Image>
  },
  {
    title: "Quick and Easy Scheduling",
    description: "All our interactions prioritize your security. Our auto detailing representatives are monitored with 24/7 recording. Check on the detailing progress and provide feedback anytime.",
    icon: <Image src={'/secure.svg'} alt="chevron_right" width={50} height={50}></Image>
  }
]
export default async function Home() {


  return (
    <>

        <section className="z-30 bg-gray-100 p-8 pb-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text on the left */}

            <div>
              <div className="flex flex-col text-3xl text-blue-600 font-semibold mb-4">
                <span>
                  <Balancer>Elevate Your Cars Shine</Balancer>
                </span>
                <span>
                  <Balancer>with Earth-Friendly</Balancer>
                </span>
                <Balancer>Detailing!</Balancer>

              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis erat. Vivamus
                quis commodo metus. Nullam nec justo id leo finibus dapibus.
              </p>
              <CarSelectionDropdown></CarSelectionDropdown>

            </div>
            {/* Image on the right */}
            <div className="bg-inherit shadow-none pl-24">
              <Image
                src="/hero.png" // Replace with your image URL
                alt="Illustration"
                className="w-full h-auto rounded-sm shadow-lg "
                width={300}
                height={300}
              />
            </div>
          </div>
      </section>


      <section className="z-30 bg-gray-100 p-8 py-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image on the right */}
            <div className="bg-inherit shadow-none pr-24">
              <Image
                src="/section-2.png" // Replace with your image URL
                alt="Illustration"
                className="w-full h-auto rounded-sm shadow-lg"
                width={300}
                height={300}
              />
            </div>

            <div className="flex flex-col align-top h-full">
              <div className="">
                <div className="flex flex-col text-3xl text-black font-semibold m-10">
                  <span>
                    <Balancer>About the Charge Refresh</Balancer>
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
    </>

  );
}

