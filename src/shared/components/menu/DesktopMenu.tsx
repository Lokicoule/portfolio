import { useState } from "react";
import Navigation from "../navigation/Navigation";
import { navigationPresenter } from "../../composition";

const DesktopMenu = () => {
  const [menuOpen] = useState(false);

  return (
    <header className="lg:w-[526px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-primary">
      <nav className={`${menuOpen ? "block mx-auto" : "hidden lg:block"}`}>
        <ul
          className={`${
            menuOpen
              ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full bg-primary"
              : "flex "
          }`}
        >
          <Navigation
            presenter={navigationPresenter}
            defaultClassName="link-menu"
            activeClassName="link-menu lg:text-white lg:bg-sky-to-blue dark:text-white"
            iconClassName="text-xl mb-1"
          />
        </ul>
      </nav>
    </header>
  );
};

export default DesktopMenu;
