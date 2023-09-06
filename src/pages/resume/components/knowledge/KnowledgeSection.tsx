import Tooltip from "../../../../shared/components/tooltip/Tooltip";
import { KnowledgeProps } from "../../ResumeViewModel";

type KnowledgeSectionProps = {
  items: KnowledgeProps[];
};

type KnowledgeSectionComponent = React.FC<KnowledgeSectionProps>;

const KnowledgeSection: KnowledgeSectionComponent = ({ items }) => {
  return (
    <div>
      <h4 className="text-3xl dark:text-white font-medium mb-8">Knowledges</h4>

      <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
        {items.map((item) =>
          item.abbreviation ? (
            <Tooltip key={item.id} text={item.name} className="resume-btn">
              <span>{item.abbreviation}</span>
            </Tooltip>
          ) : (
            <span className="resume-btn">{item.name}</span>
          )
        )}
      </div>
    </div>
  );
};

export default KnowledgeSection;
