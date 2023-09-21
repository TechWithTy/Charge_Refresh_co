import { Facebook, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <>
      <hr />
      <div className="bg-white dark:bg-black dark:text-white grid grid-flow-row grid-cols-2 grid-rows-2 md:grid-cols-2 lg:grid-cols-4 w-full text-center py-10 px-10 font-mont mt-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col">
          <div className="flex gap-3 my-2">
            <Image className="" src={'/logo.svg'} alt="logo" height={20} width={20}></Image>
            <div className="font-bold text-xl">Charge Refresh</div>
          </div>
          <div className="font-semibold text-lg text-left my-2">
            Best Mobile Detailing Company 2023
          </div>
          <div className="font-normal text-base text-left my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="flex gap-4 my-2">
            <Youtube className="" color="#0D3DE5"></Youtube>
            <Linkedin className="" color="#0D3DE5"></Linkedin>
            <Twitter className="" color="#0D3DE5"></Twitter>
            <Facebook className="" color="#0D3DE5"></Facebook>
            <Instagram className="" color="#0D3DE5"></Instagram>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col">
          <h2 className="font-bold text-left px-10">Quick Links</h2>
          <Link className="my-2 text-left px-10" href={'/about'}>About us</Link>
          <Link className="my-2 text-left px-10" href={'/contactus'}>Contact Us</Link>
          <Link className="my-2 text-left px-10" href={'/products'}>Products</Link>
          <Link className="my-2 text-left px-10" href={'/login'}>Login</Link>
          <Link className="my-2 text-left px-10" href={'/register'}>Sign up</Link>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col">
          <h2 className="font-bold text-left px-10">Support</h2>
          <Link className="my-2 text-left px-10" href={'/affiliate'}>Affiliate</Link>
          <Link className="my-2 text-left px-10" href={'/sitemap'}>Site Map</Link>
          <Link className="my-2 text-left px-10" href={'/cancel'}>Cancellation</Link>
          <Link className="my-2 text-left px-10" href={'/privacy'}>Privacy Policy</Link>
          <Link className="my-2 text-left px-10" href={'/legal'}>Legal disclaimer</Link>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col text-left">
          <h2 className="font-bold text-left px-10 ">Contact</h2>
          <div className="flex my-2 h-16 px-10 justify-start items-center align-middle">
            <div className="flex justify-center items-center bg-darkblue rounded-full h-10 w-10">
              <Image className="z-30" src={'/address.svg'} alt={""} width={20} height={20}></Image>
            </div>
            <div className="bg-blue-100 rounded h-3/4 w-full "><span className="mx-4">77 Highfield Road London N36 7SB</span></div>
          </div>
          <div className="flex my-2 h-16 px-10 justify-start items-center  align-middle">
            <div className="flex justify-center items-center bg-darkblue rounded-full h-10 w-10">
              <Image className="z-30 bg-darkblue rounded-full " src={'/phone.svg'} alt={""} width={20} height={20}></Image>
            </div>
            <div className="bg-blue-100 rounded h-3/4 w-full"><span className="mx-4">412 444 1124</span></div>
          </div>
        </div>
      </div>


    </>
  );
}
