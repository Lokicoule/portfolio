import { EducationProps } from "../ResumeViewModel";

export const educationData: EducationProps[] = [
  {
    id: "education-0",
    date: "2023 - Présent",
    title: "The Software Essentialist",
    link: "https://www.essentialist.dev/",
  },
  {
    id: "education-1",
    date: "2023 - Présent",
    title: "ThreeJS Journey",
    link: "https://threejs-journey.com/",
  },
  {
    id: "education-2",
    date: "2012 - 2017",
    title: "Expert en informatique et systèmes d’information",
    level: "Bac +5, RNCP niveau 7",
    place: "Supinfo, Marseille",
    link: "https://www.francecompetences.fr/recherche/rncp/4510/",
    internship: {
      company: "Atos",
      duration: "Alternance 2015 - 2017",
    },
  },
  {
    id: "education-3",
    date: "2010",
    title: "Baccalauréat Scientifique",
    place: "Centre National d'Enseignement à Distance (CNED)",
  },
];
