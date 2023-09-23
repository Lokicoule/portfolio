import { MdOutlineSchool } from "react-icons/md";
import { ExperienceProps } from "../../ResumeViewModel";
import ExperienceModal from "./ExperienceModal/ExperienceModal";

type ExperienceSectionProps = {
  items: ExperienceProps[];
  title: string;
};

type ExperienceComponent = React.FC<ExperienceSectionProps>;

const ExperienceSection: ExperienceComponent = ({ items, title }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#0072b1]">
          <MdOutlineSchool />
        </div>
        <h4 className="text-3xl text-primary font-medium">{title}</h4>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl p-8 py-4 pl-5 pr-3 space-y-2 mb-6 bg-primary border-1 border-primary"
        >
          <div className="flex flex-col space-y-2 ">
            <span className="text-xs text-tertiary">{item.duration}</span>
            <div className="flex items-center space-x-2">
              <ExperienceModal
                triggerButton={
                  <button className="text-xl text-secondary font-bold gradient-underline-animation">
                    {item.name}
                  </button>
                }
                experience={item}
              />
            </div>
            {item.client ? (
              <span className="text-tertiary mt-2">{item.client.name}</span>
            ) : null}
            <span className="text-tertiary">{item.place}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
