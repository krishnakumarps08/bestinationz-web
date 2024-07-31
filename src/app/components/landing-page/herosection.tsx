"use client";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import logo from "@/../../public/logo.png";
import Backgroundimg from "@/../../public/headingimageone.jpg";
import Image from "next/image";
import { AboutUs } from "./about";
import Link from "next/link";
import { AboutProperty } from "./aboutproperty";
import { HeaderCarousel } from "./header-autoscroller";
import { SearchBar } from "./searchbar";
import { UserReviews } from "./user-reviews";
import { Footer } from "./footer";
const navigation = [
  { name: "About", href: "#about-section" },
  { name: "Property", href: "#property" },
  { name: "Review", href: "#reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contactus" },
];

export const Herosection = () => {
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div>
      <div className="bg-gray-900/80">
        <header
          className={`${
            header
              ? "bg-black/80 transition duration-300 "
              : "bg-transparent transition duration-300"
          } fixed  inset-x-0 top-0 z-50 `}
        >
          <nav
            className="flex items-center justify-between p-0 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1 pt-1">
              <span className="sr-only">Your Company</span>
            
                <Image
                  className="w-32 -mt-10 cursor-pointer"
                  src={logo}
                  alt=""
                />
             
            </div>
            <div className="flex lg:hidden  ">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen && (
                  <HiBars3 className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div
              className={`hidden lg:flex lg:gap-x-12  rounded-lg ${
                header ? "" : "bg-black/60 p-2"
              }  `}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item?.href)}
                  className="text-sm font-semibold leading-6 text-white hover:text-gray400 transition duration-700 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {header ? (
              <div></div>
            ) : (
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <SearchBar />
              </div>
            )}
          </nav>
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50 " />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mt-0 rounded-md text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <MdClose className="h-6 w-6" aria-hidden="true" />
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
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <div className="relative overflow-hidden" ref={homeRef}>
          <HeaderCarousel />
        </div>
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={propertyRef}>
        <AboutProperty />
      </div>
      <div ref={reviewsRef}>
        <UserReviews />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};
