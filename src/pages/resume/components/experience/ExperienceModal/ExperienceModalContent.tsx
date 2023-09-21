import {
  FiAlertCircle,
  FiAward,
  FiBriefcase,
  FiThumbsUp,
  FiUsers,
} from "react-icons/fi";
import { GoStack } from "react-icons/go";
import {
  Disclosure,
  Modal,
} from "../../../../../shared/components/adapters/@headlessui";
import { translatingService } from "../../../../../shared/composition";
import { ExperienceProps } from "../../../ResumeViewModel";
import Stack from "../../../../../shared/components/stack/Stack";

type ExperienceModalContentProps = {
  experience: ExperienceProps;
};

const DisclosureSection = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => (
  <Disclosure icon={icon} title={title} defaultOpen>
    <div className="dark:text-white text-sm">{content}</div>
  </Disclosure>
);

const ExperienceModalContent: React.FC<ExperienceModalContentProps> = ({
  experience,
}) => (
  <Modal.Content>
    <div className="my-6 whitespace-pre-wrap">
      <DisclosureSection
        icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
        title={translatingService.translate("description")}
        content={experience.description}
      />

      <DisclosureSection
        icon={<GoStack className="text-lg mr-2 inline-block" />}
        title={translatingService.translate("technologiesUsed")}
        content={<Stack {...experience.technologiesUsed} />}
      />

      {[
        {
          items: experience.achievementsAndContributions,
          title: translatingService.translate("achievementsAndContributions"),
          icon: <FiAward className="text-lg mr-2 inline-block" />,
        },
        {
          items: experience.challengesAndSolutions,
          title: translatingService.translate("challengesAndSolutions"),
          icon: <FiAlertCircle className="text-lg mr-2 inline-block" />,
        },
        {
          items: experience.collaborationAndTeamwork,
          title: translatingService.translate("collaborationAndTeamwork"),
          icon: <FiUsers className="text-lg mr-2 inline-block" />,
        },
        {
          items: experience.impactAndLessonsLearned,
          title: translatingService.translate("impactAndLessonsLearned"),
          icon: <FiThumbsUp className="text-lg mr-2 inline-block" />,
        },
      ].map((section, index) =>
        section.items.length > 0 ? (
          <DisclosureSection
            key={index}
            icon={section.icon}
            title={section.title}
            content={
              <div className="lg:mr-6">
                <ul className="flex flex-col gap-y-2.5 gap-x-2.5 flex-wrap list-disc list-inside">
                  {section.items.map((item, i) => (
                    <li key={i} className="font-medium text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        ) : null
      )}
    </div>
  </Modal.Content>
);

export default ExperienceModalContent;
