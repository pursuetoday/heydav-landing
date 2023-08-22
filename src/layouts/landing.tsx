import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import { M_PLUS_1 } from "next/font/google";

const font = M_PLUS_1({ subsets: ["latin"], weight: ["400", "500", "700"] });

const LandingLayout = ({ children, activeLink } : {
  children: React.ReactNode,
  activeLink: string
}) => {
  return (
    <main>
      <div className={`${font.className} overflow-hidden`}>
        <NavBar activeLink={activeLink} />
        {children}
      </div>
      <div className={`${font.className} bg-teal-500 max-w-full`}>
        <Footer />
      </div>
    </main>
  );
};

export default LandingLayout;
