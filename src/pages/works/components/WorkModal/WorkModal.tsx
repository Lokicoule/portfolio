import { FaEye } from "react-icons/fa";
import WorkModalContent from "./WorkModalContent";
import WorkModalTitle from "./WorkModalTitle";
import Modal from "../../../../shared/components/modal/Modal";
import { WorkProps } from "../../WorksViewModel";

type WorkModalProps = {
  work: WorkProps;
};

type WorkModalComponent = React.FC<WorkModalProps>;

const WorkModal: WorkModalComponent = ({ work }) => {
  return (
    <Modal
      triggerButton={
        <button className="text-[#F95054] p-3 rounded-full text-lg lg:text-xs hover:text-white transition-all duration-300 ease-in-out">
          <FaEye className="inline-block" />
        </button>
      }
    >
      <WorkModalTitle work={work} />
      <WorkModalContent work={work} />
    </Modal>
  );
};

export default WorkModal;
