"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { ChevronDown, PhoneCall } from "lucide-react";
import { useState } from "react";
export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  // Function to toggle the options
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  return <>
    <div className="relative z-50 drop-shadow-md shadow-md dark:shadow-white  light:bg-white dark:bg-black light:text-gray-100 dark:text-white p-4 mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={10} height={10} className="w-10 h-10 mr-2" />
          <span className="text-xl font-semibold">Mobhill</span>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-500 mx-1">Home</a></li>
          <li><a href="#" className="hover:text-blue-500 mx-1">About</a></li>
          <li><a href="#" className="hover:text-blue-500 mx-1">Services</a></li>
          <li className="">
            <button
              className="hover:text-blue-500 flex mx-1"
              onClick={toggleOptions}
              aria-label="Toggle Car Specialties Options"
            >
              Car Specialties{' '}
              <ChevronDown color="blue" className="light:text-blue-500 dark:text-gray-100" />
            </button>
            {isOptionsOpen && (
              <ul className="absolute bg-gray-800 text-white mt-2 py-2 px-4 space-y-2">
                {/* Add more options here */}
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            )}</li>
          <li><a href="#" className="hover:text-blue-500 mx-1">Location</a></li>
          <li><a href="#" className="hover:text-blue-500 mx-1">Contact</a></li>
          <li><a href="#" className="hover:text-blue-500 mx-1">Invest</a></li>
        </ul>
        <div className="flex items-end space-x-2">
          <div className="flex text-sm font-bold rounded m-2 bg-blue-100 text-blue-700 px-5 py-2">
          <PhoneCall  fill="blue"  className="mx-1 p-1" color="blue" />
           +1 23 456 789123</div>
          <div className="text-sm m-2 rounded border-2 px-4 py-2 dark:border-gray-100 light:border-gray-800"> EN</div>
        </div>
      </div>
    </div>

  </>
}
