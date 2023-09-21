import { FaGithub } from "react-icons/fa";
import { PiCodeLight } from "react-icons/pi";
import { ServiceProps } from "../AboutViewModel";

export const serviceData: ServiceProps[] = [
  {
    id: "service-1",
    title: "Développement logiciels",
    description:
      "De l'idée à la production, je peux vous aider à construire votre prochain produit.",
    icon: <PiCodeLight />,
  },
  {
    id: "service-2",
    title: "Open Source",
    description:
      "J'aime contribuer à la communauté open source et partager mes connaissances avec les autres.",
    icon: <FaGithub />,
  },
  {
    id: "service-3",
    title: "Web Development",
    description:
      "Je peux vous aider à construire votre prochain site web en combinant modèles architecturaux solides et technologies modernes.",
    icon: <PiCodeLight />,
  },
  {
    id: "service-4",
    title: "Blockchain Development",
    description:
      "Plus qu'une technologie, la blockchain est une révolution. Je peux vous aider à construire votre prochain projet blockchain.",
    icon: <PiCodeLight />,
  },
];
