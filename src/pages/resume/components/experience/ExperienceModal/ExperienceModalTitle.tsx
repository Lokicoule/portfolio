import {
  FiBriefcase,
  FiClock,
  FiFilePlus,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import Tooltip from "../../../../../shared/components/tooltip/Tooltip";
import { Experience } from "../../../domainObjects/Experience";
import Modal from "../../../../../shared/components/modal/Modal";

type ExperienceModalTitleProps = {
  experience: Experience;
};

type ExperienceModalTitleComponent = React.FC<ExperienceModalTitleProps>;

const ExperienceModalTitle: ExperienceModalTitleComponent = ({
  experience,
}) => {
  return (
    <Modal.Title>
      <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
        {experience.attributes.name} Project
      </h2>

      <div className="flex flex-row flex-wrap lg:flex-row my-6 flex-between">
        <div className="details-left space-y-2 lg:mr-6">
          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiClock className="text-lg mr-2 hidden sm:block" />
            Duration :&nbsp;
            <span className="font-medium ">
              {experience.attributes.duration}
            </span>
          </p>
          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiBriefcase className="text-lg mr-2 hidden sm:block" />
            Company :&nbsp;
            <span className="font-medium ">
              {experience.attributes.company}
            </span>
          </p>
          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiMapPin className="text-lg mr-2 hidden sm:block" />
            Place :&nbsp;
            <span className="font-medium ">{experience.attributes.place}</span>
          </p>
        </div>

        <div className="details-right space-y-2">
          <div className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiUser className="text-lg mr-2 hidden sm:block" />
            Client :&nbsp;
            <Tooltip text={experience.attributes.client.name}>
              <span className="font-medium ">
                {experience.attributes.client.abbreviation}
              </span>
            </Tooltip>
          </div>
          <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
            <FiFilePlus className="sm:text-lg hidden sm:block mr-2 md:text-xl" />
            Project :&nbsp;
            <span className="font-medium ">{experience.attributes.tag}</span>
          </p>

          <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <FiBriefcase className="text-lg mr-2 hidden sm:block" />
            Role and Responsibilities :&nbsp;
            <span className="font-medium ">
              {experience.attributes.roleAndResponsibilities}
            </span>
          </p>
        </div>
      </div>
    </Modal.Title>
  );
};

export default ExperienceModalTitle;
