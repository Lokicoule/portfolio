import Line from "../../../../shared/components/adapters/rc-progress/Line";
import { SkillProps } from "../../ResumeViewModel";

type SkillSectionProps = {
  items: SkillProps[];
};

type SkillSectionComponent = React.FC<SkillSectionProps>;

const colors = ["#F6E5F5", "#FBF4F9", "#DAF1F9", "#A4D7E1"];

const SkillSection: SkillSectionComponent = ({ items }) => {
  return (
    <div>
      <h4 className="text-3xl dark:text-white font-medium mb-6">
        Working Skills
      </h4>
      {items.map((item, i) => (
        <Line
          color={colors[i % colors.length]}
          name={item.name}
          value={item.value}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default SkillSection;
