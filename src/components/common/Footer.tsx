import Image from "next/image";
import Link from "next/link";
import LogoLight from "public/images/logo_light.svg";
import Logo from "public/images/Asset_8@2x.png";
import { SOCIAL_MEDIA_LINKS } from "@/routes";
import { footerLinks } from "@/constants/footer";
import { Icons } from "../ui/Icons";
import { cn } from "@/lib/utils";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Container from "@/layouts/container";

const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <footer className="min-h-[22rem] flex flex-col justify-between bg-teal-500 text-white px-4 xs:px-5 md:py-8">
        <div className="mt-[1rem] flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="hidden md:flex flex-col items-center md:items-start">
            <Image src={Logo} alt="logo" priority className="w-[30%] h-[30%]"/>
            <p className="text-center md:text-left text-[14px] md:text-[16px] font-[500] mt-3 md:mt-5">
              All-in-one solution for developers
              <br className="block" />who want to understand their{" "}
              <br className="hidden md:block" />code at a deeper level.
            </p>
          </div>
          <div className="flex flex-col mt-14 md:mt-2 gap-3 md:pr-[10%] lg:pr-[130px] text-center md:text-left">
            {footerLinks && !!footerLinks.length && footerLinks.map(item => (
              <Link key={item.id} href={item.href} className="py-[1px] md:py-0 text-[14px] md:text-[15px]">
                {item.title}
              </Link>                  
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-14 md:py-4">
          <div className="flex flex-col items-center md:hidden py-5">
            <Image src={Logo} alt="logo" priority className="w-1/4 h-1/4" />
            <p className="text-center md:text-left text-[14px] md:text-[16px] px-5 mt-2">
              All-in-one solution for developers
              <br className="block" />who want to understand their{" "}
              <br className={cn(
                width < 480?  "" : "hidden md:block"
                )} 
              />
              code at a deeper level.
            </p>
          </div>      
          <p className="text-center md:text-left font-[400] text-[14px] md:text-[16px] text-gray-200 mt-2">
            A Product by <span className="font-bold">Pursue Today</span>
          </p>
          <div className="gap-6 w-[160px] flex justify-center md:justify-between items-center mx-auto mt-3 md:mr-[9%] lg:mr-[110px] md:mt-0">
            <Link href={SOCIAL_MEDIA_LINKS.facebook} target="_blank" aria-label="facebook"><Icons.facebook /></Link>
            <Link href={SOCIAL_MEDIA_LINKS.linkedIn} target="_blank" aria-label="linkedin"><Icons.linkedin /></Link>
            <Link href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" aria-label="instagram"><Icons.instagram /></Link>            
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
