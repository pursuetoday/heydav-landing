import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import { M_PLUS_1 } from "next/font/google";
import { useState, useEffect } from "react";

const font = M_PLUS_1({ subsets: ["latin"], weight: ["400", "500", "700"] });

const LandingLayout = ({ children, activeLink } : {
  children: React.ReactNode,
  activeLink: string
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleOpenNavbar = () => {
    setShowMenu(true);
    // Add the no-scroll class to the body element
    document.body.classList.add('no-scroll');
  };

  const handleCloseNavbar = () => {
    setShowMenu(false);
    // Remove the no-scroll class from the body element
    document.body.classList.remove('no-scroll');
  };

  const handleResize = () => {
    const desktopModeWidth = 768;

    if (window.innerWidth >= desktopModeWidth) {
      // Enable scrolling and close the navigation menu in desktop mode
      handleCloseNavbar();
    }
  };

  useEffect(() => {
    if (showMenu) {
      // Add the no-scroll class to the body element when the menu is open
      document.body.classList.add("no-scroll");
    } else {
      // Remove the no-scroll class when the menu is closed
      document.body.classList.remove("no-scroll");
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showMenu]);
  return (
    <main>
      <div className={`${font.className} overflow-hidden`}>
        <NavBar
          showMenu={showMenu}
          openNavbar={handleOpenNavbar}
          closeNavbar={handleCloseNavbar} 
          activeLink={activeLink} 
        />
        {children}
      </div>
      <div className={`${font.className} bg-teal-500 max-w-full`}>
        <Footer />
      </div>
    </main>
  );
};

export default LandingLayout;
