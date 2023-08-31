import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigations, productNav } from "@/constants/nav";
import Container from "@/layouts/container";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import OutlineButton from "../ui/OutlineButton";
import Logo from '/public/images/Asset_6@2x.png';
import DropdownButton from "../ui/DropDownButton";
import { Icons } from "../ui/Icons";
import { cn } from "@/lib/utils";
import { PATH_AUTH } from "@/routes";

export default function Navbar({ showMenu, openNavbar, closeNavbar, activeLink = "home" }: { 
  showMenu: boolean
  activeLink?: string
  openNavbar: () => void
  closeNavbar: () => void
 }) {
  const [active, setActive] = useState<string>(activeLink);
  const [isProductOpen, setIsProductOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const triggers = {
    onClick: () => setIsProductOpen(!isProductOpen)
  };
  return (
    <Container>
      <nav className="bg-white w-full h-20 lg:h-[90px] px-4 xs:px-5 flex items-center">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="cursor-pointer">
            <div className="w-[183px]  h-auto">
              <Image
                src={Logo}
                alt="logo"
                priority
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              />
            </div>
          </Link>
          <div className="hidden lg:flex md:items-center space-x-10 md:space-x-5 md:mt-1.5">
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
          <div className="hidden lg:flex lg:justify-center lg:items-center md:mt-1">
            <Link href={PATH_AUTH.login}>
              <OutlineButton 
                chevron
                withArrow
                isCustomIconSize={width < 1024}
                buttonText="Login" 
                customStyle={"mr-1 lg:mr-[1rem]"} 
              />
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <div
              role="presentation"
              className="outline-none mobile-menu-button"
              onClick={showMenu ? closeNavbar : openNavbar}
            >
              {showMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 28"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className=" w-6 h-6 text-primaryColor "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div>
        {showMenu && (
          <div
            data-aos={`${showMenu ? 'fade-down' : 'fade-up'}`}
            className="min-h-screen flex flex-col items-left justify-start mx-8 lg:hidden"
          >
            <div className="max-h-[calc(100vh-90px)] overflow-y-auto py-4">
              {navigations && !!navigations.length && navigations.map(item => (
                <div key={item.id}>
                  {item.title === "Products" ? (
                    <>
                      <div>
                        <Link
                          {...triggers}
                          href=""
                          className={cn(
                            'flex space-x-2 py-4 justify-between text-center focus:outline-none',
                            isProductOpen ? 'text-teal-500' : 'font-[500] text-[#343434]'
                          )}
                        >
                          <p className="block text-sm px-2 transition duration-300">Products</p>
                          <Icons.chevronDown 
                            size={18} 
                            className={cn(
                              isProductOpen ? "transform rotate-180" : "",
                              'mt-1'
                            )} 
                          />
                        </Link>
                      </div>
                      <hr className="my-2 border-blue-gray-50" />
                      {isProductOpen && (
                        <div data-aos="fade-down" className="py-2 px-1">
                          {productNav && !!productNav.length && productNav.map(item => (
                            <>
                              <Link
                                href={`/products/${item.href}`}
                                className={cn(
                                  active === item.stateName ? "font-bold text-teal-500" : "font-[500] text-[#343434]",
                                  "flex justify-center items-center py-2"
                                )}
                                onClick={() => setActive(item.stateName)}
                              >
                                <span className="text-gray-800">{item.title}</span>
                                <Icons.chevronRight size={22} className="mt-1" />
                              </Link>
                              {item.id === 5 && <hr className="my-2 border-blue-gray-50" />}
                            </>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className={cn(
                          active === item.stateName ? "font-bold text-teal-500" : "font-[500] text-[#343434]",
                          "block text-sm px-2 py-4 transition duration-300"
                        )}
                        onClick={() => setActive(item.stateName)}
                      >
                        {item.title}
                      </Link>
                      <hr className="my-2 border-blue-gray-50" />
                    </>
                  )}
                </div>
              ))}
              <Link
                href={PATH_AUTH.login}
                className="block border-2 text-center mt-8 border-teal-500 rounded-[12px] px-[34px] py-[8px]  text-[16px] text-teal-500 font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
