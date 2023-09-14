import Modal from "../../../../../shared/components/modal/Modal";
import { ExperienceProps } from "../../../ResumeViewModel";
import ExperienceModalContent from "./ExperienceModalContent";
import ExperienceModalTitle from "./ExperienceModalTitle";

type ExperienceModalProps = {
  experience: ExperienceProps;
  triggerButton: React.ReactElement;
};

type ExperienceModalComponent = React.FC<ExperienceModalProps>;

const ExperienceModal: ExperienceModalComponent = ({
  experience,
  triggerButton,
}) => {
  return (
    <Modal triggerButton={triggerButton} className="pr-4">
      <ExperienceModalTitle experience={experience} />
      <ExperienceModalContent experience={experience} />
    </Modal>
  );
};

export default ExperienceModal;
