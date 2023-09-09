import { FiAlertCircle, FiBriefcase } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import CollapsibleSection from "../../../../shared/components/collapsible-section/CollapsibleSection";
import Modal from "../../../../shared/components/modal/Modal";
import { translatingService } from "../../../../shared/composition";
import StackSection from "../../../resume/components/stack/StackSection";
import { WorkProps } from "../../WorksViewModel";

type WorkModalContentProps = {
  work: WorkProps;
};

type WorkModalContentComponent = React.FC<WorkModalContentProps>;

const WorkModalContent: WorkModalContentComponent = ({ work }) => {
  return (
    <Modal.Content>
      <div className="my-6 whitespace-pre-wrap">
        <CollapsibleSection
          icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
          title={translatingService.translate("description")}
          defaultOpen
        >
          <span className="dark:text-white text-sm">{work.description}</span>
        </CollapsibleSection>

        <CollapsibleSection
          icon={<GoStack className="text-lg mr-2 inline-block" />}
          title={translatingService.translate("technologiesUsed")}
          defaultOpen
        >
          <StackSection stack={work.technologiesUsed} />
        </CollapsibleSection>

        {work.challengesAndSolutions.length > 0 && (
          <CollapsibleSection
            icon={<FiAlertCircle className="text-lg mr-2 inline-block" />}
            title={translatingService.translate("challengesAndSolutions")}
            defaultOpen
          >
            <div className="flex flex-col flex-wrap lg:flex-row space-y-2 lg:mr-6">
              <ul className="flex gap-y-2.5 gap-x-2.5 flex-wrap list-disc list-inside">
                {work.challengesAndSolutions.map((item, i) => (
                  <li key={i} className="font-medium text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleSection>
        )}
      </div>
    </Modal.Content>
  );
};

export default WorkModalContent;
