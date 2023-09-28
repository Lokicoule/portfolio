import {
  FiBriefcase,
  FiClock,
  FiFilePlus,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import Modal from "../../../../../shared/components/adapters/@headlessui/Modal";
import Tooltip from "../../../../../shared/components/tooltip/Tooltip";
import { ExperienceProps } from "../../../ResumeViewModel";
import { translatingService } from "../../../../../shared/composition";

type DetailItemProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

type ExperienceModalTitleProps = {
  experience: ExperienceProps;
};

type DetailItemComponent = React.FC<DetailItemProps>;

type ExperienceModalTitleComponent = React.FC<ExperienceModalTitleProps>;

const DetailItem: DetailItemComponent = ({ icon, label, value }) =>
  value ? (
    <span className="text-secondary flex items-center mt-2 text-[15px] sm:text-lg flex-wrap">
      <span className={`text-lg mr-2 block`}>{icon}</span>
      {label} :&nbsp;
      <span className="font-medium">{value}</span>
    </span>
  ) : null;

const renderClientValue = (client: ExperienceProps["client"]) => {
  if (!client) return null;

  const clientName = client.name;
  const clientAbbreviation = client.abbreviation;

  if (clientAbbreviation) {
    return (
      <Tooltip text={clientName}>
        <span className="font-medium">{clientAbbreviation}</span>
      </Tooltip>
    );
  } else {
    return <span className="font-medium">{clientName}</span>;
  }
};

const ExperienceModalTitle: ExperienceModalTitleComponent = ({
  experience,
}) => {
  return (
    <Modal.Title>
      <h2 className="text-primary text-4xl text-center font-primary">
        {experience.name}
      </h2>

      <div className="flex flex-col flex-wrap lg:flex-row my-6 flex-between">
        <div className="space-y-2 lg:mr-6">
          <DetailItem
            icon={<FiClock />}
            label={translatingService.translate("duration")}
            value={experience.duration}
          />
          <DetailItem
            icon={<FiBriefcase />}
            label={translatingService.translate("company")}
            value={experience.company}
          />
          <DetailItem
            icon={<FiMapPin />}
            label={translatingService.translate("place")}
            value={experience.place}
          />
        </div>

        <div className="space-y-2">
          <DetailItem
            icon={<FiUser />}
            label={translatingService.translate("client")}
            value={renderClientValue(experience?.client)}
          />
          <DetailItem
            icon={<FiFilePlus />}
            label={translatingService.translate("project")}
            value={experience.tag}
          />
          <DetailItem
            icon={<FiBriefcase />}
            label={translatingService.translate("roleAndResponsibilities")}
            value={experience.roleAndResponsibilities}
          />
        </div>
      </div>
    </Modal.Title>
  );
};

export default ExperienceModalTitle;
