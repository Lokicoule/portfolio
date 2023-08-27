import { FaEye } from "react-icons/fa";
import { FiCode, FiExternalLink, FiFilePlus, FiUser } from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import Modal from "../../../shared/components/modal/Modal";
import { themeController } from "../../../shared/composition";
import { Experience } from "../domainObjects/Experience";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
          <div className="space-y-2 ">
            <div className="space-y-2 flex flex-wrap">
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                <FiFilePlus className="sm:text-lg hidden sm:block mr-2 md:text-xl" />
                Project :&nbsp;
                <span className="font-medium ">
                  {singleData?.attributes.name}
                </span>
              </p>
            </div>
            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
              <FiCode className="text-lg mr-2 hidden sm:block " />
              Languages :&nbsp;
              <span className="font-medium ">
                {singleData?.attributes.technologiesUsed.languages.join(", ")}
              </span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
              <FiUser className="text-lg mr-2 hidden sm:block" />
              Client :&nbsp;
              <span className="font-medium ">
                {singleData?.attributes.client}
              </span>
            </p>

            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
              <FiExternalLink className="text-lg mr-2 hidden sm:block" />
              Preview :&nbsp;
              <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                <a
                  href={singleData.attributes?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {singleData.attributes?.linkText}
                </a>
              </span>
            </p>
          </div>
        </div>
      </Modal.Title>

      <Modal.Content>
        <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
          {Array.from(Array(100).keys()).map((item, i) => (
            <span key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </span>
          ))}
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
