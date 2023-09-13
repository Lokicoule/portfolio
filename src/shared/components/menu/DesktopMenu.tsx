import { useState } from "react";
import Navigation from "./Navigation";

const DesktopMenu = () => {
  const [menuOpen] = useState(false);

  return (
    <header className="lg:w-[526px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-[#05151e]">
      <nav className={`${menuOpen ? "block mx-auto" : "hidden lg:block"}`}>
        <ul
          className={`${
            menuOpen
              ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full bg-white dark:bg-[#121e26]"
              : "flex "
          }`}
        >
          <Navigation
            defaultClassName="link-menu"
            activeClassName="link-menu lg:text-white lg:bg-sky-to-blue dark:text-white hover:brightness-125"
            iconClassName="text-xl mb-1"
          />
        </ul>
      </nav>
    </header>
  );
};

export default DesktopMenu;
