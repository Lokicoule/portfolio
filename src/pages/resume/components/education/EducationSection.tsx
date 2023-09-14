import { FaEye } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { EducationProps } from "../../ResumeViewModel";

export type EducationSectionProps = {
  items: EducationProps[];
};

const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#F95054]">
          <MdOutlineBusinessCenter />
        </div>
        <h4 className="text-3xl dark:text-white font-medium">Education</h4>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-[#05151e] rounded-xl p-8  dark:hover:shadow-xl transition duration-200 ease-in-out dark:hover:bg-[#121e26] border-[1px] border-gray-200 dark:border-gray-700 hover:bg-[#FAFAFA] py-4 pl-5 pr-3 space-y-2 mb-6 "
        >
          <span className="text-xs text-gray-800 dark:text-[#b7b7b7]">
            {item.date}
          </span>
          <h3 className="text-xl dark:text-white">{item.title}</h3>
          <div className=" flex justify-between items-center">
            <p className="dark:text-[#b7b7b7]">{item.level}</p>
            {item?.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F95054] p-3 rounded-lg text-lg lg:text-xs hover:text-white transition-all duration-300 ease-in-out"
              >
                <FaEye className="inline-block" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
