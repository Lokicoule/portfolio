import { useEffect, useState } from "react";
import PageLayout from "../../shared/components/layouts/PageLayout";
import Line from "../../shared/components/line/Line";
import { themeController, translatingService } from "../../shared/composition";
import { experienceRepository } from "../../shared/composition/setupRepositories";
import EducationSection from "./components/Education";
import ExperienceSection from "./components/experience/ExperienceSection";
import { Experience } from "./domainObjects/Experience";

const educationArray = [
  {
    id: 1,
    date: "2023 - Present",
    title: "The Software Essentialist",
    bg: "#FFF4F4",
    link: "https://www.essentialist.dev/",
  },
  {
    id: 2,
    date: "2012 - 2017",
    title: "Expert en informatique et systèmes d’information",
    level: "RNCP4510, Niveau 7",
    link: "https://www.francecompetences.fr/recherche/rncp/4510/",
    bg: "#FFF1FB",
  },
];

// Working Skills items for Resume page
const lineArray = [
  {
    id: "01",
    color: "#FF6464",
    name: "Web Design",
    number: 80,
  },
  {
    id: "02",
    color: "#9272D4",
    name: "Mobile App ",
    number: 95,
  },
  {
    id: "03",
    color: "#5185D4",
    name: "Illustrator",
    number: 65,
  },
  {
    id: "03",
    color: "#CA56F2",
    name: "Photoshop",
    number: 75,
  },
];

const Resume = () => {
  const useLang = themeController.getLangHook();
  const { lang } = useLang();

  return (
    <PageLayout title="Resume">
      <div className="px-2 sm:px-5 md:px-10 lg:px-14 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          <ExperienceSection items={experienceRepository.findAll(lang)} />
          <EducationSection items={educationArray} />
        </div>
      </div>

      <div className="container py-12 px-2 sm:px-5 md:px-10 lg:px-14 bg-[#F3F6F6]">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h4 className="text-3xl dark:text-white font-medium mb-6">
              Working Skills
            </h4>
            {lineArray.map((item, i) => (
              <Line
                color={item.color}
                name={item.name}
                value={item.number}
                key={i}
              />
            ))}
          </div>

          <div className="col-span-1">
            <h4 className="text-3xl dark:text-white font-medium mb-8">
              Knowledges
            </h4>

            <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
              <button className="resume-btn">Digital Design</button>
              <button className="resume-btn">Marketing</button>
              <button className="resume-btn">Social Media</button>
              <button className="resume-btn">Print</button>
              <button className="resume-btn">Time Management</button>
              <button className="resume-btn">Flexibility</button>
              <button className="resume-btn">Print</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resume;
