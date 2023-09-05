import Link from "next/link";
import Container from "@/layouts/container";
import SolidButton from "../ui/SolidButton";

export default function VSCodeHeroSection() {
  return (
    <Container>
      <div className="py-[2rem] mt-[2rem] md:mt-[5rem] pt-[2rem] pb-[5rem] px-5">
        <h1 className="text-center font-bold leading-[3.1rem] text-teal-500 lg:text-[60px]">
          AI CodeBuddy
        </h1>
        <p className="text-center my-4 text-xl lg:px-60 italic">
          Inquire, Inspect, and Improve - Right Within Your Codebase
        </p>
        <div className="flex justify-center">
          <Link href="/early-access">
            <SolidButton 
              chevron
              withArrow
              buttonText="Get Access"
              />
          </Link>
        </div>
      </div>
    </Container>
  )
}
