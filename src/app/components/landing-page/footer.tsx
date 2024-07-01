import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const navigation = {
  solutions: [
    { name: "Munnar", href: "#" },
    { name: "Pondycherry", href: "#" },
    { name: "Mahabalipuram", href: "#" },
    { name: "Kodaikanal", href: "#" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "Contact-us", href: "/contactus" },
    { name: "Gallery", href: "/gallery" },
    { name: "Property", href: "/property" },
  ],
  legal: [
    { name: "PrivacyPolicy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebook className="text-xl" />
    },
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram className="text-xl"/>
    },
    {
      name: "YouTube",
      href: "#",
      icon: <FaYoutube className="text-xl" />
    },
    {
        name: "WhatsApp",
        href: "#",
        icon: <FaWhatsapp className="text-xl" />
      },
      {
        name: "Email",
        href: "#",
        icon: <MdOutlineMail className="text-xl" />
      },
  ],
};
import Image from "next/image";
import logo from "@/../../public/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className=" w-full px-6 pb-8 pt-16 border-t sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-0 -mt-20">
            <Image src={logo} width={200} height={200} alt="Company name" />
            

            <div className="flex space-x-6 ml-8">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                 <span >{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Popular Locations
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-white">
            &copy; 2024 Bestinationz
          </p>
        </div>
      </div>
    </footer>
  );
};
