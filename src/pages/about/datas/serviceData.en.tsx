import { FaGithub, FaLaptopCode } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { ServiceProps } from "../AboutViewModel";

export const serviceData: ServiceProps[] = [
  {
    id: "service-1",
    title: "Web",
    description:
      "I can help you develop your next website by combining solid architectural patterns and modern technologies.",
    icon: <FaLaptopCode />,
  },
  {
    id: "service-2",
    title: "Open source",
    description:
      "I like to contribute to the open source community and share my knowledge with others.",
    icon: <FaGithub />,
  },
  {
    id: "service-3",
    title: "Software",
    description:
      "From idea to production, I can help you design your next product.",
    icon: <MdOutlineWeb />,
  },
  {
    id: "service-4",
    title: "Blockchain",
    description:
      "More than a technology, blockchain is a revolution. I can participate in the development of your next blockchain project.",
    icon: <SiBlockchaindotcom />,
  },
];
