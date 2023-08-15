import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Home",
    routePath: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "Resume",
    routePath: "/resume",
    icon: <CgNotes />,
  },
  {
    id: 3,
    name: "Works",
    routePath: "/works",
    icon: <FiCodesandbox />,
  },
  {
    id: 5,
    name: "Contact",
    routePath: "/contact",
    icon: <RiContactsBookLine />,
  },
];

const DesktopMenu = () => {
  const [menuOpen] = useState(false);
  const location = useLocation();

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
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              className={`${
                location.pathname === item.routePath
                  ? "link-menu lg:text-white lg:bg-sky-to-blue"
                  : "link-menu"
              } `}
              to={item.routePath}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopMenu;
