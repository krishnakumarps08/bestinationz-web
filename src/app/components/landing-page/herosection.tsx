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
const navigation = [
  // { name: "About", href: "#about-section" },
  { name: "Property", href: "#property" },
  // { name: "Review", href: "#reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contactus" },
];

export const Herosection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [header, setheader] = useState(false);

  const aboutUsRef = useRef<HTMLDivElement>(null);
  const propertyRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const scrollheader = () => {
    if (window.scrollY >= 20) {
      setheader(true);
    } else {
      setheader(false);
    }
  };
  useEffect(() => window.addEventListener("scroll", scrollheader), []);
  const handleNavigationClick = (event: any, href: any) => {
    event.preventDefault();
    if (href === "#about-section" && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (href === "#property" && propertyRef.current) {
      propertyRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (href === "#reviews" && reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            className="-mt-14 lg:-ml-[20px] "
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
          <div className="lg:hidden block">
            <Image
              src={Logo}
              alt="Bestinationz-Logo"
              width={150}
              height={150}
              className="-mt-[72px] "
            />
          </div>
          <div className="lg:flex gap-x-5 lg:-ml-[130px] -ml-0  hidden bg-black/50 px-10 py-5 mt-5 rounded-lg   ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigationClick(e, item?.href)}
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
      <div className=" flex md:justify-center justify-start md:px-0 px-5">
      <Image
              src={Logo}
              alt="Bestinationz-Logo"
              width={400}
              height={300}
            />
      </div>
      
      <AboutUs/>
    </div>
  );
};
