import { EducationProps } from "../ResumeViewModel";

export const educationData: EducationProps[] = [
  {
    id: "education-0",
    date: "2023 - Present",
    title: "The Software Essentialist",
    link: "https://www.essentialist.dev/",
  },
  {
    id: "education-1",
    date: "2023 - Present",
    title: "ThreeJS Journey",
    link: "https://threejs-journey.com/",
  },
  {
    id: "education-2",
    date: "2012 - 2017",
    title: "Expert in computer science and information systems",
    level: "Master's degree, RNCP level 7",
    place: "Supinfo, Marseille",
    link: "https://www.francecompetences.fr/recherche/rncp/4510/",
    internship: {
      company: "Atos",
      duration: "Internship 2015 - 2017",
    },
  },
  {
    id: "education-3",
    date: "2010",
    title: "High School diploma, scientific option, equivalent to A Levels",
    place: "Centre National d'Enseignement à Distance (CNED)",
  },
];
