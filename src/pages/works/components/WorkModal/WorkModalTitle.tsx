import { FiFilePlus } from "react-icons/fi";
import Modal from "../../../../shared/components/modal/Modal";
import { WorkProps } from "../../WorksViewModel";
import { FaGithub, FaNpm } from "react-icons/fa";

type WorkModalTitleProps = {
  work: WorkProps;
};

type WorkModalTitleComponent = React.FC<WorkModalTitleProps>;

const WorkModalTitle: WorkModalTitleComponent = ({ work }) => {
  return (
    <Modal.Title>
      <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
        {work.name}
      </h2>

      <div className="flex flex-row flex-wrap lg:flex-row my-6 justify-between items-center">
        <div className="details-left space-y-2">
          <span className="dark:text-white flex items-center text-[15px] sm:text-lg">
            <FiFilePlus className="sm:text-lg hidden sm:block mr-2 md:text-xl" />
            Project:&nbsp;
            <span className="font-medium">{work.tag}</span>
          </span>
        </div>
        <div className="details-right space-y-2 lg:mr-6 flex-shrink-0 flex flex-row">
          <span className="font-medium inline-block">
            <a href={work.link.github} target="_blank" rel="noreferrer">
              <FaGithub className="text-lg mr-2 hidden sm:block h-6 w-6" />
            </a>
            <a href={work.link.npm} target="_blank" rel="noreferrer">
              <FaNpm className="text-lg mr-2 hidden sm:block h-6 w-6" />
            </a>
          </span>
        </div>
      </div>
    </Modal.Title>
  );
};

export default WorkModalTitle;
