import { MdOutlineSchool } from "react-icons/md";
import { ExperienceProps } from "../../ResumeViewModel";
import ExperienceItem from "./ExperienceItem";

type ExperienceSectionProps = {
  items: ExperienceProps[];
  title: string;
};

type ExperienceComponent = React.FC<ExperienceSectionProps>;

const ExperienceSection: ExperienceComponent = ({ items, title }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#0072b1]">
          <MdOutlineSchool />
        </div>
        <h4 className="text-3xl text-primary font-medium">{title}</h4>
      </div>
      {items.map((item) => (
        <ExperienceItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ExperienceSection;
