import { FaGithub } from "react-icons/fa";
import { PiCodeLight } from "react-icons/pi";
import { ServiceProps } from "../AboutViewModel";

export const serviceData: ServiceProps[] = [
  {
    id: "service-1",
    title: "Web Development",
    description:
      "I can help you build your next website using strong architectural patterns and modern technologies.",
    icon: <PiCodeLight />,
  },
  {
    id: "service-2",
    title: "Open Source",
    description:
      "I am a strong believer in open source software and I love contributing to OSS projects.",
    icon: <FaGithub />,
  },
  {
    id: "service-3",
    title: "Software Development",
    description:
      "From idea to production, I can help you build your next product.",
    icon: <PiCodeLight />,
  },
  {
    id: "service-4",
    title: "Blockchain Development",
    description:
      "I possess the skills and expertise to be good in the field of blockchain, confidently handling its complexities and driving innovation.",
    icon: <PiCodeLight />,
  },
];
