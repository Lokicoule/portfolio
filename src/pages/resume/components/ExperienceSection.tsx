import { Disclosure } from "@headlessui/react";
import { FaEye } from "react-icons/fa";
import {
  FiAlertCircle,
  FiAward,
  FiBriefcase,
  FiChevronUp,
  FiClock,
  FiExternalLink,
  FiFilePlus,
  FiMapPin,
  FiThumbsUp,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { MdOutlineSchool } from "react-icons/md";
import Modal from "../../../shared/components/modal/Modal";
import { themeController } from "../../../shared/composition";
import { Experience } from "../domainObjects/Experience";
import { FiCode, FiServer, FiPackage, FiTool, FiLayout } from "react-icons/fi";

type ExperienceSectionProps = {
  items: Experience[];
};

type ExperienceComponent = React.FC<ExperienceSectionProps>;
const colors: string[] = [
  "bg-[#F6EDCF]",
  "bg-[#F0DAB1]",
  "bg-[#DAF1F9]",
  "bg-[#A4D7E1]",
];

const ExperienceSection: ExperienceComponent = ({ items }) => {
  const useTheme = themeController.getThemeHook();
  const { themeMode } = useTheme();

  const modalContent = ({ singleData }: { singleData: Experience }) => (
    <>
      <Modal.Title>
        <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
          {singleData.attributes.name} Project
        </h2>
        <div className="flex flex-col flex-wrap lg:flex-row my-6">
          <div className="details-left space-y-2 lg:mr-6">
            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
              <FiFilePlus className="sm:text-lg hidden sm:block mr-2 md:text-xl" />
              Project :&nbsp;
              <span className="font-medium ">
                {singleData.attributes.description}
              </span>
            </p>
          </div>

          <div className="details-right space-y-2">
            <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
              <FiUser className="text-lg mr-2 hidden sm:block" />
              Client :&nbsp;
              <span className="font-medium ">
                {singleData.attributes.client}
              </span>
            </p>
            <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
              <FiClock className="text-lg mr-2 hidden sm:block" />
              Duration :&nbsp;
              <span className="font-medium ">
                {singleData.attributes.duration}
              </span>
            </p>
            <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
              <FiMapPin className="text-lg mr-2 hidden sm:block" />
              Place :&nbsp;
              <span className="font-medium ">
                {singleData.attributes.place}
              </span>
            </p>
            <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
              <FiBriefcase className="text-lg mr-2 hidden sm:block" />
              Company :&nbsp;
              <span className="font-medium ">
                {singleData.attributes.company}
              </span>
            </p>
            <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
              <FiBriefcase className="text-lg mr-2 hidden sm:block" />
              Role and Responsibilities :&nbsp;
              <span className="font-medium ">
                {singleData.attributes.roleAndResponsibilities}
              </span>
            </p>
          </div>
        </div>
      </Modal.Title>

      <Modal.Content>
        <Disclosure as="div" className="mt-2" defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <div className="flex items-center">
                  <GoStack className="text-lg mr-2 inline-block" />
                  Stack
                </div>
                <FiChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                <div className="flex flex-col flex-wrap lg:flex-row my-6">
                  <ul className="list-none list-inside space-y-2 lg:mr-6">
                    {singleData.attributes.technologiesUsed.languages && (
                      <li>
                        <span>
                          <FiCode className="inline-block mr-2" />
                          Languages:&nbsp;
                        </span>
                        <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                          {singleData.attributes.technologiesUsed?.languages.map(
                            (item, i) => (
                              <span key={i} className="tag">
                                {item}
                              </span>
                            )
                          )}
                        </div>
                      </li>
                    )}
                    {singleData.attributes.technologiesUsed.frameworks && (
                      <li>
                        <span>
                          <FiLayout className="inline-block mr-2" />
                          Frameworks:&nbsp;
                        </span>
                        <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                          {singleData.attributes.technologiesUsed?.frameworks.map(
                            (item, i) => (
                              <span key={i} className="tag">
                                {item}
                              </span>
                            )
                          )}
                        </div>
                      </li>
                    )}
                    {singleData.attributes.technologiesUsed.libraries && (
                      <li>
                        <span>
                          <FiPackage className="inline-block mr-2" />
                          Libraries:&nbsp;
                        </span>
                        <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                          {singleData.attributes.technologiesUsed?.libraries.map(
                            (item, i) => (
                              <span key={i} className="tag">
                                {item}
                              </span>
                            )
                          )}
                        </div>
                      </li>
                    )}
                    {singleData.attributes.technologiesUsed.tools && (
                      <li>
                        <span>
                          <FiTool className="inline-block mr-2" />
                          Tools:&nbsp;
                        </span>
                        <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                          {singleData.attributes.technologiesUsed?.tools.map(
                            (item, i) => (
                              <span key={i} className="tag">
                                {item}
                              </span>
                            )
                          )}
                        </div>
                      </li>
                    )}
                    {singleData.attributes.technologiesUsed.architectures && (
                      <li>
                        <span>
                          <FiServer className="inline-block mr-2" />
                          Architectures:&nbsp;
                        </span>
                        <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                          {singleData.attributes.technologiesUsed?.architectures.map(
                            (item, i) => (
                              <span key={i} className="tag">
                                {item}
                              </span>
                            )
                          )}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiAward className="text-lg mr-2 hidden sm:block" />
            Achievements and Contributions :&nbsp;
            <span className="font-medium ">
              {singleData.attributes.achievementsAndContributions.join(", ")}
            </span>
          </p>
          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiAlertCircle className="text-lg mr-2 hidden sm:block" />
            Challenges and Solutions :&nbsp;
            <span className="font-medium ">
              {singleData.attributes.challengesAndSolutions.join(", ")}
            </span>
          </p>
          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiUsers className="text-lg mr-2 hidden sm:block" />
            Collaboration and Teamwork :&nbsp;
            <span className="font-medium ">
              {singleData.attributes.collaborationAndTeamwork.join(", ")}
            </span>
          </p>
          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiThumbsUp className="text-lg mr-2 hidden sm:block" />
            Impact and Lessons Learned :&nbsp;
            <span className="font-medium ">
              {singleData.attributes.impactAndLessonsLearned.join(", ")}
            </span>
          </p>
          {singleData.attributes.link && (
            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
              <FiExternalLink className="text-lg mr-2 hidden sm:block" />
              Preview :&nbsp;
              <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                <a
                  href={singleData.attributes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {singleData.attributes.linkText}
                </a>
              </span>
            </p>
          )}
        </p>
      </Modal.Content>
    </>
  );

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#F95054]">
          <MdOutlineSchool />
        </div>
        <h4 className="text-3xl dark:text-white font-medium">Experience</h4>
      </div>
      {items.map((item, idx) => (
        <div
          key={item.attributes.id}
          className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 transition-all duration-300 ease-in-out ${
            themeMode === "dark" ? "transparent" : `${colors[idx]}`
          }`}
        >
          <span className="text-xs text-gray-800 dark:text-[#b7b7b7]">
            {item.attributes.duration}
          </span>
          <h3 className="text-xl dark:text-white">
            {item.attributes.name}&nbsp;
            {item?.attributes.client && (
              <span className="dark:text-[#b7b7b7] text-sm font-normal">
                at {item.attributes.company}
              </span>
            )}
          </h3>

          <div className=" flex justify-between items-center">
            <p className="dark:text-[#b7b7b7]">{item.attributes.place}</p>
            <Modal
              triggerButton={
                <button className="text-[#F95054] p-3 rounded-lg text-lg lg:text-xs hover:text-white transition-all duration-300 ease-in-out">
                  <FaEye className="inline-block" />
                </button>
              }
            >
              {() =>
                modalContent({
                  singleData: item,
                })
              }
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
