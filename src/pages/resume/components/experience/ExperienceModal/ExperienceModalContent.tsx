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
import CollapsibleSection from "../../../../../shared/components/collapsible-section/CollapsibleSection";
import { Experience } from "../../../domainObjects/Experience";
import Modal from "../../../../../shared/components/modal/Modal";

type ExperienceModalContentProps = {
  experience: Experience;
};

type ExperienceModalContentComponent = React.FC<ExperienceModalContentProps>;

const ExperienceModalContent: ExperienceModalContentComponent = ({
  experience,
}) => {
  return (
    <Modal.Content>
      <div className="my-6">
        <CollapsibleSection
          icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
          title="Description"
          defaultOpen
        >
          <p className="dark:text-white text-sm">
            {experience.attributes.description}
          </p>
        </CollapsibleSection>

        <CollapsibleSection
          icon={<GoStack className="text-lg mr-2 inline-block" />}
          title="Stack"
        >
          <div className="flex flex-col flex-wrap lg:flex-row">
            <ul className="list-none list-inside space-y-2 lg:mr-6">
              {experience.attributes.technologiesUsed.languages && (
                <li>
                  <span>
                    <FiCode className="inline-block mr-2" />
                    Languages:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.technologiesUsed.languages.map(
                      (item, i) => (
                        <span key={i} className="tag">
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </li>
              )}
              {experience.attributes.technologiesUsed.frameworks && (
                <li>
                  <span>
                    <FiLayout className="inline-block mr-2" />
                    Frameworks:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.technologiesUsed.frameworks.map(
                      (item, i) => (
                        <span key={i} className="tag">
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </li>
              )}
              {experience.attributes.technologiesUsed.libraries && (
                <li>
                  <span>
                    <FiPackage className="inline-block mr-2" />
                    Libraries:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.technologiesUsed.libraries.map(
                      (item, i) => (
                        <span key={i} className="tag">
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </li>
              )}
              {experience.attributes.technologiesUsed.tools && (
                <li>
                  <span>
                    <FiTool className="inline-block mr-2" />
                    Tools:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.technologiesUsed.tools.map(
                      (item, i) => (
                        <span key={i} className="tag">
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </li>
              )}
              {experience.attributes.technologiesUsed.architectures && (
                <li>
                  <span>
                    <FiServer className="inline-block mr-2" />
                    Architectures:&nbsp;
                  </span>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.technologiesUsed.architectures.map(
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

        <CollapsibleSection
          icon={<FiAward className="text-lg mr-2 inline-block" />}
          title="Achievements and Contributions"
        >
          <div className="flex flex-col flex-wrap lg:flex-row">
            <ul className="list-none list-inside space-y-2 lg:mr-6">
              {experience.attributes.achievementsAndContributions.length >
                0 && (
                <li>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.achievementsAndContributions.map(
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

        <CollapsibleSection
          icon={<FiAlertCircle className="text-lg mr-2 inline-block" />}
          title="Challenges and Solutions"
        >
          <div className="flex flex-col flex-wrap lg:flex-row">
            <ul className="list-none list-inside space-y-2 lg:mr-6">
              {experience.attributes.challengesAndSolutions.length > 0 && (
                <li>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.challengesAndSolutions.map(
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

        <CollapsibleSection
          icon={<FiUsers className="text-lg mr-2 inline-block" />}
          title="Collaboration and Teamwork"
        >
          <div className="flex flex-col flex-wrap lg:flex-row">
            <ul className="list-none list-inside space-y-2 lg:mr-6">
              {experience.attributes.collaborationAndTeamwork.length > 0 && (
                <li>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.collaborationAndTeamwork.map(
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

        <CollapsibleSection
          icon={<FiThumbsUp className="text-lg mr-2 inline-block" />}
          title="Impact and Lessons Learned"
        >
          <div className="flex flex-col flex-wrap lg:flex-row">
            <ul className="list-none list-inside space-y-2 lg:mr-6">
              {experience.attributes.impactAndLessonsLearned.length > 0 && (
                <li>
                  <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
                    {experience.attributes.impactAndLessonsLearned.map(
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
      </div>
    </Modal.Content>
  );
};

export default ExperienceModalContent;
