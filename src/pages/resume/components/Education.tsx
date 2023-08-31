import { FaEye } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { themeController } from "../../../shared/composition";

export type EducationItem = {
  id: string;
  date: string;
  title: string;
  level: string;
  bg: string;
  link?: string;
};

export type EducationSectionProps = {
  items: EducationItem[];
};

const colors: string[] = [
  "bg-[#F6E5F5]",
  "bg-[#FBF4F9]",
  "bg-[#DAF1F9]",
  "bg-[#A4D7E1]",
];

const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  const useTheme = themeController.getModeHook();
  const { mode } = useTheme();

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#F95054]">
          <MdOutlineBusinessCenter />
        </div>
        <h4 className="text-3xl dark:text-white font-medium">Education</h4>
      </div>
      {items.map((item, idx) => (
        <div
          key={item.id}
          className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 transition-all duration-300 ease-in-out ${
            mode === "dark" ? "transparent" : `${colors[idx]}`
          }`}
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
