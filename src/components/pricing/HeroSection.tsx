import Image from "next/image";
import ToggleButton from "./ToggleButton";
import Box1 from '/public/images/box1.svg';

const HeroSection = ({ isMonthly, setIsMonthly } : {
  isMonthly: boolean
  setIsMonthly: (isMonthly: boolean) => void
}) => {
  return (
    <div className="flex flex-col justify-between px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 md:my-[2rem]">
      <div className="bg-white flex items-center md:pt-[2rem] md:pb-[5rem] flex-col md:flex-row lg:space-x-24">
        <div className="h-64 md:w-[80%] flex flex-col justify-center items-center md:mt-10">
          <h1 className="text-center md:text-left md:text-[70px] md:leading-[85px]">
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
        <div className="md:mt-10 hidden md:block">
          <Image src={Box1} alt="Heydev box" width={600} height={600} />
        </div>
      </div>
      <div className="md:mt-10">
        <ToggleButton isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      </div>
    </div>
  );
};

export default HeroSection;
