import Modal from "../../../../shared/components/adapters/@headlessui/Modal";
import { WorkProps } from "../../WorksViewModel";
import WorkModalContent from "./WorkModalContent";
import WorkModalTitle from "./WorkModalTitle";

type WorkModalProps = {
  work: WorkProps;
  triggerButton: React.ReactElement;
};

type WorkModalComponent = React.FC<WorkModalProps>;

const WorkModal: WorkModalComponent = ({ work, triggerButton }) => {
  return (
    <Modal
      triggerButton={triggerButton}
      className="w-full md:w-10/12 lg:w-[850px]"
      panelClassName="pr-4"
    >
      {() => (
        <>
          <WorkModalTitle work={work} />
          <WorkModalContent work={work} />
        </>
      )}
    </Modal>
  );
};

export default WorkModal;
