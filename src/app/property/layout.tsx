import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ProperySidebar } from "../components/properties/sidebar";
const fontsans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Bestinationz",
    description: "Your travel partner",
  };

  export default async function CreatorLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
      return (
        <div className=" block">
          <div>
            {/* <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                 <ProperySidebar className="hidden lg:block sticky top-0 self-start h-screen border-r-2" /> 
                <div className=" md:col-span-4 overflow-y-auto mt-20"> */}
                  {children}
                {/* </div>
              </div>
            </div> */}
          </div>
        </div>
      );
    
  }