import { useState } from "react";
import Navigation from "./Navigation";

const DesktopMenu = () => {
  const [menuOpen] = useState(false);

  return (
    <header className="lg:w-[526px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className={`${menuOpen ? "block mx-auto" : "hidden lg:block"}`}>
        <ul
          className={`${
            menuOpen
              ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full bg-white dark:bg-[#1d1d1d]"
              : "flex "
          }`}
        >
          <Navigation
            defaultClassName="link-menu"
            activeClassName="link-menu lg:text-white lg:bg-sky-to-blue"
            iconClassName="text-xl mb-1"
          />
        </ul>
      </nav>
    </header>
  );
};

export default DesktopMenu;
