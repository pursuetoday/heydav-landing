import Container from "@/layouts/container";

export default function VSCodeHeroSection() {
  return (
    <Container>
      <div className="py-[2rem] mt-[2rem] md:mt-[5rem] pt-[2rem] pb-[5rem] px-5">
          <h1 className="text-center font-bold leading-[3.1rem] text-teal-500">
              Visual Studio Code Extension - Supercharge Your Code
          </h1>
          <p className="text-center my-6 font-bold text-xl lg:px-60">
              Seamlessly integrated into your IDE, this extension offers{" "}
              <br className="hidden md:block"/>unparalleled features to enhance your coding experience.
          </p>
      </div>
    </Container>
  )
}
