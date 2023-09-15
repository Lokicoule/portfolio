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
        <ExperienceModal
          key={item.id}
          triggerButton={
            <div className="bg-white dark:bg-[#05151e] rounded-xl p-8  dark:hover:shadow-xl transition duration-200 ease-in-out dark:hover:bg-[#121e26] border-[1px] border-gray-200 dark:border-gray-700 hover:bg-[#FAFAFA] py-4 pl-5 pr-3 space-y-2 mb-6">
              <div className="cursor-pointer text-gray-700 dark:text-[#b7b7b7] hover:text-[#b7b7b7] dark:hover:text-gray-600 transition duration-200 ease-in-out">
              <div className="flex flex-col space-y-2 ">
                <span className="text-xs text-gray-800 dark:text-[#b7b7b7]">
                  {item.duration}
                </span>

                <span className="text-xl font-bold text-left ">
                  {item.name}
                </span>

                <span className="dark:text-[#b7b7b7] text-gray-600 mt-2">
                  {item.client.name}
                </span>
                <span className="dark:text-[#b7b7b7] text-gray-600">
                  {item.place}
                </span>
              </div>
              </div>
            </div>
          }
          experience={item}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
