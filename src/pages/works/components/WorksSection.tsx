import { MdOutlineSchool } from "react-icons/md";
import { useTheme } from "../../../shared/components/theme/ThemeProvider";
import WorkModal from "./WorkModal/WorkModal";
import { WorkProps } from "../WorksViewModel";

type WorkSectionProps = {
  items: WorkProps[];
};

type WorkComponent = React.FC<WorkSectionProps>;
const colors: string[] = [
  "bg-[#F6EDCF]",
  "bg-[#F0DAB1]",
  "bg-[#DAF1F9]",
  "bg-[#A4D7E1]",
];

const WorkSection: WorkComponent = ({ items }) => {
  const { mode } = useTheme();

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#F95054]">
          <MdOutlineSchool />
        </div>
        <h4 className="text-3xl dark:text-white font-medium">Work</h4>
      </div>
      {items.map((item, idx) => (
        <div
          key={item.id}
          className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 transition-all duration-300 ease-in-out ${
            mode === "dark" ? "transparent" : `${colors[idx]}`
          }`}
        >
          <h3 className="text-xl dark:text-white">{item.name}</h3>

          <div className=" flex justify-between items-center">
            <WorkModal work={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
