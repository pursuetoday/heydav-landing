import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { navigations } from "@/constants/nav";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import OutlineButton from "../ui/OutlineButton";
import SolidButton from "../ui/SolidButton";
import Logo from '/public/images/logo_dark.svg';
import Hamburger from '/public/images/hamburger.svg';
import DropdownButton from "../ui/DropDownButton";
import Sidebar from "./Sidebar";

export default function Navbar({ activeLink = "home" }: { activeLink?: string }) {
  const [active, setActive] = useState<string>(activeLink);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white w-full h-20 lg:h-[90px] px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-[121px] flex items-center custom-container">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="cursor-pointer">
            <Image 
              src={Logo} 
              alt="logo"
              priority 
            />
          </Link>
          <div className="hidden md:flex md:items-center space-x-10 md:space-x-5 md:mt-1.5">
            {navigations && !!navigations.length && navigations.map(item => (
              <Fragment key={item.id}>
                {item.title === "Products" ? (
                  <DropdownButton />
                ) : (
                  <Link
                    key={item.id}
                    onClick={() => setActive(item.stateName)}
                    className={active === item.stateName ? "font-bold text-teal-500 text-[14px] lg:text-[16px]" : "text-[14px] lg:text-[16px] font-[500] text-[#343434]"}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                )}
              </Fragment>
            ))}
          </div>
          <div className="hidden md:flex md:justify-center md:items-center md:mt-1">
            <Link href='/'>
              <OutlineButton 
                chevron
                withArrow
                isCustomIconSize={width < 1024}
                buttonText="Book a demo" 
                customStyle={"mr-1 lg:mr-[1rem]"} 
              />
            </Link>
            <Link href='/'>
              <SolidButton
                withArrow
                chevron 
                isCustomIconSize={width < 1024}
                buttonText="Join Waitlist" 
              />
            </Link>
          </div>
          <div className="md:hidden flex">
            <Image
              src={Hamburger}
              alt="hamburger"
              onClick={toggleMobileMenu}
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
      {isOpen && <Sidebar {...{active, setActive}} />}
    </>
  )
}
