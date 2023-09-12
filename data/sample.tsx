import CarDealCard, { ServiceDealProps } from "@/components/layout/DealsCard"
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

export const carList = ['HONDA', 'FORD', 'TOYOTA', 'PORSCHE', "MUSTANG"]

export const carDataList = [
  {
    id: 1,
    carType: 'Sports Car',
    carName: 'Porsche GT',
    startingPrice: '$150,000',
    imageUrl: '/hero.png', // Replace with actual image URL
    carPrice: '$150,000',
    transmission: "automatic",
    seating: "2",
    fuelType: "petrol"
  },

]

export const freshDeals: ServiceDealProps[] = [
  {
    id: "98172309812-30",
    name: "New Car Destickering",
    description: "Fresh out of the dealership and want those sticker decals removed? Our expert team can safely and efficiently remove any unwanted stickers, ensuring no residue is left behind. Your Tesla will have the sleek, uninterrupted look. We will also install any hubcaps that may come with the vehicle.",
    dealType: 'SALE',
    extra: 'Includes  New Car DE stickering and Hub cap installation .',
    image: "/hero.png",
    price: '$75',
    car: 'Tesla'
  },
  {
    id: "98172309812-30",
    name: "New Car Destickering",
    description: "Fresh out of the dealership and want those sticker decals removed? Our expert team can safely and efficiently remove any unwanted stickers, ensuring no residue is left behind. Your Tesla will have the sleek, uninterrupted look. We will also install any hubcaps that may come with the vehicle.",
    dealType: 'SALE',
    extra: 'Includes  New Car DE stickering and Hub cap installation .',
    image: "/hero.png",
    price: '$75',
    car: 'Tesla'

  },
  {
    id: "98172309812-30",
    name: "New Car Destickering",
    description: "Fresh out of the dealership and want those sticker decals removed? Our expert team can safely and efficiently remove any unwanted stickers, ensuring no residue is left behind. Your Tesla will have the sleek, uninterrupted look. We will also install any hubcaps that may come with the vehicle.",
    dealType: 'SALE',
    extra: 'Includes  New Car DE stickering and Hub cap installation .',
    image: "/hero.png",
    price: '$75',
    car: 'Tesla'

  }
]


export const carDealsList = [

  <CarDealCard
    id="091283-201"
    name={freshDeals[0].name}
    price={freshDeals[0].price}
    dealType={freshDeals[0].dealType}
    description={freshDeals[0].description}
    extra={freshDeals[0].extra}
    image={freshDeals[0].image}
    car={freshDeals[0].car}></CarDealCard>,
  <CarDealCard
    id="091283-201"
    name={freshDeals[0].name}
    price={freshDeals[0].price}
    dealType={freshDeals[0].dealType}
    description={freshDeals[0].description}
    extra={freshDeals[0].extra}
    image={freshDeals[0].image}
    car={freshDeals[0].car}></CarDealCard>,
  <CarDealCard
    id="091283-201"
    name={freshDeals[0].name}
    price={freshDeals[0].price}
    dealType={freshDeals[0].dealType}
    description={freshDeals[0].description}
    extra={freshDeals[0].extra}
    image={freshDeals[0].image}
    car={freshDeals[0].car}></CarDealCard>,
  <CarDealCard
    id="091283-201"
    name={freshDeals[0].name}
    price={freshDeals[0].price}
    dealType={freshDeals[0].dealType}
    description={freshDeals[0].description}
    extra={freshDeals[0].extra}
    image={freshDeals[0].image}
    car={freshDeals[0].car}></CarDealCard>,
  <CarDealCard
    id="091283-201"
    name={freshDeals[0].name}
    price={freshDeals[0].price}
    dealType={'DISCOUNT'}
    description={freshDeals[0].description}
    extra={freshDeals[0].extra}
    image={freshDeals[0].image}
    car={freshDeals[0].car}></CarDealCard>,
  <CarDealCard
    id="091283-201"
    name={freshDeals[0].name}
    price={freshDeals[0].price}
    dealType={'DISCOUNT'}
    description={freshDeals[0].description}
    extra={freshDeals[0].extra}
    image={freshDeals[0].image}
    car={freshDeals[0].car}></CarDealCard>



]
