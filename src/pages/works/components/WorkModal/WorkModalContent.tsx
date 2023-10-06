import { FiBriefcase } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import Disclosure from "../../../../shared/components/adapters/@headlessui/Disclosure";
import Modal from "../../../../shared/components/adapters/@headlessui/Modal";
import Stack from "../../../../shared/components/elements/Stack";
import { translatingService } from "../../../../shared/composition";
import { WorkProps } from "../../WorksViewModel";

type WorkModalContentProps = {
  work: WorkProps;
};

type WorkModalContentComponent = React.FC<WorkModalContentProps>;

const WorkModalContent: WorkModalContentComponent = ({ work }) => {
  return (
    <Modal.Content>
      <div className="my-6 whitespace-pre-wrap">
        <Disclosure
          icon={<GoStack className="text-lg mr-2 inline-block" />}
          title={translatingService.translate("technologiesUsed")}
          defaultOpen
        >
          <Stack {...work.technologiesUsed} />
        </Disclosure>

        <Disclosure
          icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
          title={translatingService.translate("description")}
          defaultOpen
        >
          <span className="dark:text-white text-sm">{work.description}</span>
        </Disclosure>

        {work.keyFeatures ? (
          <Disclosure
            icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
            title={translatingService.translate("works.keyFeatures")}
            defaultOpen
          >
            <ul className="dark:text-white text-sm">
              {work.keyFeatures?.map((item, i) => (
                <li key={i} className="font-medium text-sm mb-2">
                  <span>{item.key}</span>
                  <ul className="list-disc list-inside">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="font-medium text-sm text-gray-600 dark:text-gray-400"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Disclosure>
        ) : null}
      </div>
    </Modal.Content>
  );
};

export default WorkModalContent;
