import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Navigation from "./Navigation";

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      {!open ? (
        <button
          className="lg:opacity-0 lg:invisible visible opacity-100  bg-sky-to-blue w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 p-3"
          onClick={toggleMenu}
        >
          <AiOutlineMenu />
        </button>
      ) : (
        <button
          className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-sky-to-blue w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 p-3"
          onClick={toggleMenu}
        >
          <AiOutlineClose />
        </button>
      )}
      <nav className={`${open ? "block lg:hidden" : "hidden"}`}>
        <ul
          className={`${
            open
              ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full backdrop-blur-xl bg-white/30"
              : "flex my-12 "
          }`}
        >
          <Navigation
            defaultClassName="mobile-link-menu text-black dark:text-white"
            activeClassName="mobile-link-menu text-white linked bg-sky-to-blue"
            iconClassName="text-xl mr-2"
            onClick={toggleMenu}
          />
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
