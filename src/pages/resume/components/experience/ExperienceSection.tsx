import { MdOutlineSchool } from "react-icons/md";
import { themeController } from "../../../../shared/composition";
import { Experience } from "../../domainObjects/Experience";
import ExperienceModal from "./ExperienceModal/ExperienceModal";

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
            <ExperienceModal experience={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
