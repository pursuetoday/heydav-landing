import { Fragment } from "react";
import Image from 'next/image'
import Logo from "public/images/logo_light.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navigations } from "@/constants/nav";
import DropdownButton from "../ui/DropDownButton";
import OutlineButton from "../ui/OutlineButton";
import SolidButton from "../ui/SolidButton";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Sidebar({ active, setActive } : {
    active: string
    setActive: (active: string) => void
}) {
  const { width } = useWindowDimensions();
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased md:hidden">
      <div className="fixed top-0 left-0 w-[90%] h-full bg-white shadow-lg">
        <div className="relative h-full flex flex-col p-4">
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Image src={Logo} alt="Logo" width={70} height={70} priority className="-mr-5" />
                <span className="text-xl font-bold">Heydev</span>
              </div>
            </div>
            <hr className="border-gray-200 my-4" />
            <div className="mb-4 text-gray-400 px-2">
                {navigations && !!navigations.length && navigations.map(item => (
                  <Fragment key={item.id}>
                    {item.title === "Products" ? (
                      <>
                        <DropdownButton />
                        <hr className="border-gray-200 my-4" />
                      </>
                    ) : (
                      <>
                        <Link
                          key={item.id}
                          onClick={() => setActive(item.stateName)}
                          className={cn(
                            active === item.stateName ? "font-bold text-teal-500" : "font-[500] text-[#343434]",
                            "block py-2"
                          )}
                          href={item.href}
                        >
                          {item.title}
                        </Link>
                        {item.id === 4 ? null : <hr className="border-gray-200 my-4" />}
                      </>
                    )}
                  </Fragment>
                ))}
            </div>
          </div>
          <div className={cn(
            "my-[1rem] flex items-center justify-center",
            width < 370 ? "flex-col gap-4" : "flex-row gap-2"
          )}>
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
                customStyle={"px-5"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
