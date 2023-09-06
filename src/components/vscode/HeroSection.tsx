import Link from "next/link";
import Image from "next/image";
import Container from "@/layouts/container";
import Icon1 from '/public/images/ai-vs-icon.svg';
import Icon2 from '/public/images/ai-ij-icon.svg';
import Icon3 from '/public/images/ai-pc-icon.svg';
import Icon4 from '/public/images/ai-jet-icon.svg';
import Toastify from "../ui/Toastify";
import { VSCODE_EXTENSION } from "@/routes";

export default function VSCodeHeroSection() {
  const showToast = (message: string, type: string) => {
    Toastify(message, type);
  };

  const handleClick = () => {
    return showToast('Coming Soon', 'info');
  }
  return (
    <Container>
      <div className="py-[2rem] mt-[2rem] md:mt-[5rem] pt-[2rem] pb-[4rem] px-5">
        <h1 className="text-center font-bold leading-[3.1rem] text-teal-500 lg:text-[60px]">
          AI CodeBuddy
        </h1>
        <p className="text-center my-6 text-xl lg:px-60 italic">
          Inquire, Inspect, and Improve - Right Within Your Codebase
        </p>
        <p className="text-center text-lg lg:px-60 font-bold my-2">
          Available with
        </p>
        <div className="flex justify-center my-6 gap-4">
          <Link href={VSCODE_EXTENSION}>
            <Image 
              src={Icon1}
              alt="VS Code"
              width={40}
              height={40}
            />
          </Link>
          <div onClick={handleClick} className="cursor-pointer">
            <Image 
              src={Icon2}
              alt="IJ IDE"
              width={40}
              height={40}
            />
          </div>
          <div onClick={handleClick} className="cursor-pointer">
            <Image 
              src={Icon3}
              alt="PC IDE"
              width={40}
              height={40}
            />
          </div>
          <div onClick={handleClick} className="cursor-pointer mt-1">
            <Image 
              src={Icon4}
              alt="JET IDE"
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
