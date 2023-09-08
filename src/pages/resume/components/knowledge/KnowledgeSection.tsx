import { KnowledgeProps } from "../../ResumeViewModel";
import StackSection from "../stack/StackSection";

type KnowledgeSectionProps = KnowledgeProps;

type KnowledgeSectionComponent = React.FC<KnowledgeSectionProps>;

const KnowledgeSection: KnowledgeSectionComponent = (props) => {
  return (
    <div>
      <h4 className="text-3xl dark:text-white font-medium mb-8">Knowledges</h4>

      <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
        <StackSection stack={props} />
      </div>
    </div>
  );
};

export default KnowledgeSection;
