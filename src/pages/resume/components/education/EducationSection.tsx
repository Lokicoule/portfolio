import { MdOutlineSchool } from "react-icons/md";
import { EducationProps } from "../../ResumeViewModel";
import EducationItem from "./EducationItem";

export type EducationSectionProps = {
  items: EducationProps[];
  title: string;
};

const EducationSection: React.FC<EducationSectionProps> = ({
  items,
  title,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#0072b1]">
          <MdOutlineSchool />
        </div>
        <h4 className="text-3xl text-secondary font-medium">{title}</h4>
      </div>
      {items.map((item) => (
        <EducationItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default EducationSection;
