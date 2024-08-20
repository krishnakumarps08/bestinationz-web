"use client";
import backgroundImage from "@/../../public/bestinationz-background.jpg";
import Image from "next/image";
import Logo from "@/../../public/logo.png";
import { BsFillLuggageFill } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import Link from "next/link";
import { AboutUs } from "./about";
import { TrendingLocations } from "./trending-locations";
import { IoMdClose } from "react-icons/io";
import { UserReviews } from "./user-reviews";
import { Dialog, DialogPanel } from "@headlessui/react";
const navigation = [
  // { name: "About", href: "#about-section" },
  { name: "Property", href: "#property" },
  // { name: "Review", href: "#reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contactus" },
];

export const Herosection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="px-4 lg:py-0 py-4 flex flex-row justify-between ">
        <div className="lg:block hidden">
          <Image
            src={Logo}
            alt="Bestinationz-Logo"
            width={200}
            height={200}
            className="-mt-16 lg:-ml-[20px] "
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" inline-flex  justify-center rounded-md "
          >
            <span className="sr-only">Open main menu</span>
            <BsFillLuggageFill
              aria-hidden="true"
              className="h-8 w-10 text-black hover:text-black/50"
            />
          </button>
        </div>
        <div>
          {/* <div className="lg:hidden block">
            <Image
              src={Logo}
              alt="Bestinationz-Logo"
              width={150}
              height={150}
              className="-mt-[72px] "
            />
          </div> */}
          <div className="lg:flex gap-x-5 lg:-ml-[130px] -ml-0  hidden bg-black/50 px-10 py-5 mt-5 rounded-lg   ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6  text-white hover:text-gray400 transition duration-700 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="lg:flex hidden gap-x-4   lg:py-5 mt-5 rounded-lg bg-black/50 px-5  py-0 -ml-[65px] fixed ">
            <div>
              <BsWhatsapp className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="lg:hidden flex gap-x-4 rounded-lg bg-black/50 px-5  py-2 ">
            <div>
              <BsWhatsapp className="text-white text-xl cursor-pointer" />
            </div>
            <div>
              <MdPhone className="text-white text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <IoMdClose aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
      <div className=" flex md:justify-center justify-start md:px-0 px-5">
        <Image src={Logo} alt="Bestinationz-Logo" width={400} height={300} />
      </div>

      <AboutUs />
      <TrendingLocations />
      <UserReviews/>
    </div>
  );
};
