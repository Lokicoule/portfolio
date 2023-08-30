import { FaEye } from "react-icons/fa";
import Modal from "../../../../../shared/components/modal/Modal";
import { Experience } from "../../../domainObjects/Experience";
import ExperienceModalContent from "./ExperienceModalContent";
import ExperienceModalTitle from "./ExperienceModalTitle";

type ExperienceModalProps = {
  experience: Experience;
};

type ExperienceModalComponent = React.FC<ExperienceModalProps>;

const ExperienceModal: ExperienceModalComponent = ({ experience }) => {
  return (
    <Modal
      triggerButton={
        <button className="text-[#F95054] p-3 rounded-lg text-lg lg:text-xs hover:text-white transition-all duration-300 ease-in-out">
          <FaEye className="inline-block" />
        </button>
      }
    >
      <ExperienceModalTitle experience={experience} />
      <ExperienceModalContent experience={experience} />
    </Modal>
  );
};

export default ExperienceModal;
