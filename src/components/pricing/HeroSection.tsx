import Image from "next/image";
import ToggleButton from "./ToggleButton";
import Box1 from '/public/images/box1.svg';
import Container from "@/layouts/container";

const HeroSection = ({ isMonthly, setIsMonthly } : {
  isMonthly: boolean
  setIsMonthly: (isMonthly: boolean) => void
}) => {
  return (
    <Container>
      <div className="flex flex-col justify-between px-4 xs:px-5">
        <div className="bg-white flex items-center justify-center md:pt-[2rem] md:pb-[5rem] flex-col md:flex-row lg:space-x-24">
          <div className="h-64 flex flex-col justify-center items-center md:mt-10">
            <h1 className="text-center md:text-[70px] md:leading-[85px]">
                Choose a
                <span
                style={{ fontSize: "inherit", fontWeight: "inherit" }}
                className="text-teal-500"
                >
                {" "}
                Plan
                <br />
                </span>{" "}
                that works for you
            </h1>
          </div>
        </div>
        <div className="md:mt-5">
          <ToggleButton isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
