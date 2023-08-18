import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { CgNotes as ResumeIcon } from "react-icons/cg";
import { FiCodesandbox as WorksIcon } from "react-icons/fi";
import { RiContactsBookLine as ContactIcon } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Home",
    routePath: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Resume",
    routePath: "/resume",
    icon: <ResumeIcon />,
  },
  {
    id: 3,
    name: "Works",
    routePath: "/works",
    icon: <WorksIcon />,
  },
  {
    id: 4,
    name: "Contact",
    routePath: "/contact",
    icon: <ContactIcon />,
  },
];

type NavigationProps = {
  defaultClassName: string;
  activeClassName: string;
  iconClassName?: string;
  onClick?: () => void;
};

const Navigation: React.FC<NavigationProps> = ({
  defaultClassName,
  activeClassName,
  iconClassName,
  onClick,
}) => {
  const location = useLocation();

  return (
    <>
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.id}
          className={`${
            location.pathname === item.routePath
              ? activeClassName
              : defaultClassName
          } `}
          to={item.routePath}
          onClick={onClick}
        >
          <span className={iconClassName}>{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
