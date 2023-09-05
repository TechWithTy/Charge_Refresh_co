import Image from "next/image"
export const cardData = [
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
  
export  const carList = ['HONDA', 'FORD', 'TOYOTA', 'PORSCHE', "MUSTANG"]