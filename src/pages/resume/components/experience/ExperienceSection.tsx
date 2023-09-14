import { MdOutlineSchool } from "react-icons/md";
import { ExperienceProps } from "../../ResumeViewModel";
import ExperienceModal from "./ExperienceModal/ExperienceModal";

type ExperienceSectionProps = {
  items: ExperienceProps[];
};

type ExperienceComponent = React.FC<ExperienceSectionProps>;

const ExperienceSection: ExperienceComponent = ({ items }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#F95054]">
          <MdOutlineSchool />
        </div>
        <h4 className="text-3xl dark:text-white font-medium">Experience</h4>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-[#05151e] rounded-xl p-8  dark:hover:shadow-xl transition duration-200 ease-in-out dark:hover:bg-[#121e26] border-[1px] border-gray-200 dark:border-gray-700 hover:bg-[#FAFAFA] py-4 pl-5 pr-3 space-y-2 mb-6 "
        >
          <div className="flex flex-col space-y-2">
            <span className="text-xs text-gray-800 dark:text-[#b7b7b7]">
              {item.duration}
            </span>
            <ExperienceModal
              triggerButton={
                <button className="text-xl font-bold text-blue-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-blue-500 text-left">
                  {item.name}
                </button>
              }
              experience={item}
            />
            <span className="dark:text-[#b7b7b7] mt-2">{item.client.name}</span>
            <span className="dark:text-[#b7b7b7]">{item.place}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
