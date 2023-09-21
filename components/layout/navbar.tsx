
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { ChevronDown, Menu, PhoneCall } from "lucide-react";
import { useState } from "react";
export default function NavBar({ session }: { session: Session | null }) {

  return (
    <>
      <div className="relative flex items-center justify-between w-full max-w-screen z-50 drop-shadow-md shadow-md dark:shadow-white light:bg-white dark:bg-black light:text-gray-100 dark:text-white p-4">
        <div className="flex items-center ml-10">
          <Image src="/logo.png" alt="Logo" width={120} height={40} className="mr-2" />
        </div>
        <div className="peer lg:hidden">
          <button className="">
            <Menu></Menu>
          </button>
        </div>


        {/* Navigation links */}
        <ul className={`hidden peer-focus:block peer-focus:animate-slide-left-fade fixed  flex-col justify-start items-center bg-white left-0 top-0 w-screen h-screen z-30 lg:bg-inherit lg:w-auto lg:h-auto lg:relative lg:flex lg:flex-row space-x-4`}>
          {/* Hamburger icon for small screens */}

          <li>
            <a href="#" className="hover:text-blue-500 mx-1">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 mx-1">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 mx-1">
              Services
            </a>
          </li>
          <li className="">
            <button
              className="peer/specials hover:text-blue-500 flex mx-1"
              aria-label="Toggle Car Specialties Options"
            >
              Car Specialties{' '}
              <ChevronDown
                color="blue"
                className="light:text-blue-500 dark:text-gray-100"
              />
            </button>
            <ul className="hidden peer-focus/specials:block absolute bg-gray-800 text-white mt-2 py-2 px-4 space-y-2">
              {/* Add more options here */}
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 mx-1">
              Location
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 mx-1">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 mx-1">
              Invest
            </a>
          </li>
          <li>
            <div className="md:flex items-end space-x-2 mr-10 lg:hidden">
              <div className="flex text-sm font-bold rounded m-2 bg-blue-100 text-blue-700 px-5 py-2">
                <PhoneCall fill="blue" className="mx-1 p-1" color="blue" />
                +1 23 456 789123
              </div>
              <div className="text-sm m-2 text-center rounded border-2 px-4 py-2 dark:border-gray-100 light:border-gray-800">
                EN
              </div>
            </div>
          </li>
        </ul>

        <div className="md:flex items-end space-x-2 mr-10 hidden">
          <div className="flex text-sm font-bold rounded m-2 bg-blue-100 text-blue-700 px-5 py-2">
            <PhoneCall fill="blue" className="mx-1 p-1" color="blue" />
            +1 23 456 789123
          </div>
          <div className="text-sm m-2 rounded border-2 px-4 py-2 dark:border-gray-100 light:border-gray-800">
            EN
          </div>
        </div>
      </div>
    </>
  );
}