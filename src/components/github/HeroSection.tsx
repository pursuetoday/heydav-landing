import Link from "next/link";
import Container from "@/layouts/container";
import SolidButton from "../ui/SolidButton";

export default function GithubHeroSection() {
  return (
    <Container>
      <div className="px-5 mt-[2rem] md:mt-[5rem] pt-[2rem] md:py-[2rem] md:pb-[5rem]">
        <h1 className="text-center font-bold leading-[3.1rem] text-teal-500 lg:text-[60px]">
          AI QualityGuard
        </h1>
        <p className="text-center my-6 text-xl italic">
          Your Personal Quality Inspector in the World of Code Reviews
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
