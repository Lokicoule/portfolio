import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { CgNotes as ResumeIcon } from "react-icons/cg";
import { FiCodesandbox as WorksIcon } from "react-icons/fi";
import { RiContactsBookLine as ContactIcon } from "react-icons/ri";
import { NavigationItemProps } from "../NavigationViewModel";

export const navigationData: NavigationItemProps[] = [
  {
    id: "navigation-1",
    name: "Home",
    routePath: "/en",
    icon: <HomeIcon />,
  },
  {
    id: "navigation-2",
    name: "Resume",
    routePath: "/en/resume",
    icon: <ResumeIcon />,
  },
  {
    id: "navigation-3",
    name: "Works",
    routePath: "/en/works",
    icon: <WorksIcon />,
  },
  {
    id: "navigation-4",
    name: "Contact",
    routePath: "/en/contact",
    icon: <ContactIcon />,
  },
];
