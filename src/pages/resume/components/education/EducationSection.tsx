import { MdOutlineBusinessCenter } from "react-icons/md";
import { EducationProps } from "../../ResumeViewModel";

export type EducationSectionProps = {
  items: EducationProps[];
};

const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#0072b1]">
          <MdOutlineBusinessCenter />
        </div>
        <h4 className="text-3xl text-secondary font-medium">Education</h4>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl p-8 bg-primary dark:hover:shadow-xl transition duration-200 ease-in-out dark:hover:bg-[#121e26] border-[1px] border-primary-light dark:border-primary-dark hover:bg-[#FAFAFA] py-4 pl-5 pr-3 space-y-2 mb-6"
        >
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="cursor-pointer text-gray-700 dark:text-[#b7b7b7] hover:text-[#b7b7b7] dark:hover:text-gray-600 transition duration-200 ease-in-out">
                <div className="flex flex-col space-y-2 ">
                  <span className="text-xs text-gray-800 dark:text-[#b7b7b7]">
                    {item.date}
                  </span>

                  <span className="text-xl font-bold text-left ">
                    {item.title}
                  </span>

                  <span className="dark:text-[#b7b7b7] text-gray-600 mt-2">
                    {item.level}
                  </span>
                </div>
              </div>
            </a>
          ) : (
            <div className="text-gray-700 dark:text-[#b7b7b7]">
              <div className="flex flex-col space-y-2 ">
                <span className="text-xs text-gray-800 dark:text-[#b7b7b7]">
                  {item.date}
                </span>

                <span className="text-xl font-bold text-left ">
                  {item.title}
                </span>

                <span className="dark:text-[#b7b7b7] text-gray-600 mt-2">
                  {item.level}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
