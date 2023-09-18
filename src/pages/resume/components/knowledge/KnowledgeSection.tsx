import { KnowledgeProps } from "../../ResumeViewModel";
import Stack from "../../../../shared/components/stack/Stack";

type KnowledgeSectionProps = KnowledgeProps;

type KnowledgeSectionComponent = React.FC<KnowledgeSectionProps>;

const KnowledgeSection: KnowledgeSectionComponent = (props) => {
  return (
    <div>
      <h4 className="text-3xl dark:text-white font-medium mb-8">Knowledges</h4>

      <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
        <Stack
          {...props}
          tag={{
            className: "tag bg-primary dark:text-white",
          }}
        />
      </div>
    </div>
  );
};

export default KnowledgeSection;
