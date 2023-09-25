import { FaGithub, FaLaptopCode } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { ServiceProps } from "../AboutViewModel";

export const serviceData: ServiceProps[] = [
  {
    id: "service-1",
    title: "Web",
    description:
      "Je peux vous aider à développer votre prochain site web en combinant modèles architecturaux solides et technologies modernes.",
    icon: <FaLaptopCode />,
  },
  {
    id: "service-2",
    title: "Open source",
    description:
      "J'aime contribuer à la communauté open source et partager mes connaissances avec les autres.",
    icon: <FaGithub />,
  },
  {
    id: "service-3",
    title: "Logiciel",
    description:
      "De l'idée à la production, je peux vous aider à concevoir votre prochain produit.",
    icon: <MdOutlineWeb />,
  },
  {
    id: "service-4",
    title: "Blockchain",
    description:
      "Plus qu'une technologie, la blockchain est une révolution. Je peux participer à l'élaboration de votre prochain projet blockchain.",
    icon: <SiBlockchaindotcom />,
  },
];
