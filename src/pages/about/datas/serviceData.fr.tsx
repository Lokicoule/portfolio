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
      "Je crois fortement au logiciel open source et j'aime contribuer aux projets OSS.",
    icon: <FaGithub />,
  },
  {
    id: "service-3",
    title: "Web Development",
    description:
      "Je peux vous aider à construire votre prochain site web en utilisant des modèles architecturaux solides et des technologies modernes.",
    icon: <PiCodeLight />,
  },
  {
    id: "service-4",
    title: "Blockchain Development",
    description:
      "Je suis un passionné de blockchain et j'adore construire des applications décentralisées.",
    icon: <PiCodeLight />,
  },
];
