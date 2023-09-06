import {
  FiAlertCircle,
  FiAward,
  FiBriefcase,
  FiCode,
  FiLayout,
  FiPackage,
  FiServer,
  FiThumbsUp,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { SiMaterialdesignicons } from "react-icons/si";
import CollapsibleSection from "../../../../../shared/components/collapsible-section/CollapsibleSection";
import Modal from "../../../../../shared/components/modal/Modal";
import { translatingService } from "../../../../../shared/composition";
import { ExperienceProps } from "../../../ResumeViewModel";

type ExperienceModalContentProps = {
  experience: ExperienceProps;
};

type ExperienceModalContentComponent = React.FC<ExperienceModalContentProps>;

const ExperienceModalContent: ExperienceModalContentComponent = ({
  experience,
}) => {
  return (
    <Modal.Content>
      <div className="my-6 whitespace-pre-wrap">
        <CollapsibleSection
          icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
          title={translatingService.translate("description")}
          defaultOpen
        >
          <span className="dark:text-white text-sm">
            {experience.description}
          </span>
        </CollapsibleSection>

        <CollapsibleSection
          icon={<GoStack className="text-lg mr-2 inline-block" />}
          title={translatingService.translate("technologiesUsed")}
          defaultOpen
        >
          <div className="flex flex-col flex-wrap lg:flex-row">
            <ul className="list-none list-inside space-y-2 lg:mr-6">
              {experience.technologiesUsed.languages && (
                <li>
                  <span>
                    <FiCode className="inline-block mr-2" />
                    Languages:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.technologiesUsed.languages.map((item, i) => (
                      <span key={i} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              )}
              {experience.technologiesUsed.frameworks && (
                <li>
                  <span>
                    <FiLayout className="inline-block mr-2" />
                    Frameworks:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.technologiesUsed.frameworks.map((item, i) => (
                      <span key={i} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              )}
              {experience.technologiesUsed.libraries && (
                <li>
                  <span>
                    <FiPackage className="inline-block mr-2" />
                    Libraries:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.technologiesUsed.libraries.map((item, i) => (
                      <span key={i} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              )}
              {experience.technologiesUsed.databases && (
                <li>
                  <span>
                    <FiServer className="inline-block mr-2" />
                    Databases:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.technologiesUsed.databases.map((item, i) => (
                      <span key={i} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              )}
              {experience.technologiesUsed.tools && (
                <li>
                  <span>
                    <FiTool className="inline-block mr-2" />
                    Tools:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.technologiesUsed.tools.map((item, i) => (
                      <span key={i} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              )}
              {experience.technologiesUsed.architectures && (
                <li>
                  <span>
                    <SiMaterialdesignicons className="inline-block mr-2" />
                    Architectures:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.technologiesUsed.architectures.map(
                      (item, i) => (
                        <span key={i} className="tag">
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </CollapsibleSection>

        {experience.achievementsAndContributions.length > 0 && (
          <CollapsibleSection
            icon={<FiAward className="text-lg mr-2 inline-block" />}
            title={translatingService.translate("achievementsAndContributions")}
            defaultOpen
          >
            <div className="flex flex-col flex-wrap lg:flex-row space-y-2 lg:mr-6">
              <ul className="flex gap-y-2.5 gap-x-2.5 flex-wrap list-disc list-inside">
                {experience.achievementsAndContributions.map((item, i) => (
                  <li key={i} className="font-medium text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleSection>
        )}

        {experience.challengesAndSolutions.length > 0 && (
          <CollapsibleSection
            icon={<FiAlertCircle className="text-lg mr-2 inline-block" />}
            title={translatingService.translate("challengesAndSolutions")}
            defaultOpen
          >
            <div className="flex flex-col flex-wrap lg:flex-row space-y-2 lg:mr-6">
              <ul className="flex gap-y-2.5 gap-x-2.5 flex-wrap list-disc list-inside">
                {experience.challengesAndSolutions.map((item, i) => (
                  <li key={i} className="font-medium text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleSection>
        )}

        {experience.collaborationAndTeamwork.length > 0 && (
          <CollapsibleSection
            icon={<FiUsers className="text-lg mr-2 inline-block" />}
            title={translatingService.translate("collaborationAndTeamwork")}
            defaultOpen
          >
            <div className="flex flex-col flex-wrap lg:flex-row space-y-2 lg:mr-6">
              <ul className="flex gap-y-2.5 gap-x-2.5 flex-wrap list-disc list-inside">
                {experience.collaborationAndTeamwork.map((item, i) => (
                  <li key={i} className="font-medium text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleSection>
        )}

        {experience.impactAndLessonsLearned.length > 0 && (
          <CollapsibleSection
            icon={<FiThumbsUp className="text-lg mr-2 inline-block" />}
            title={translatingService.translate("impactAndLessonsLearned")}
            defaultOpen
          >
            <div className="flex flex-col flex-wrap lg:flex-row space-y-2 lg:mr-6">
              <ul className="flex gap-y-2.5 gap-x-2.5 flex-wrap list-disc list-inside">
                {experience.impactAndLessonsLearned.map((item, i) => (
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

export default ExperienceModalContent;
