import { MdOutlineBusinessCenter } from "react-icons/md";
import { EducationProps } from "../../ResumeViewModel";
import ConfirmModal from "../../../../shared/components/modals/ConfirmationModal";

export type EducationSectionProps = {
  items: EducationProps[];
};

const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#0072b1]">
          <MdOutlineBusinessCenter />
        </div>
        <h4 className="text-3xl text-secondary font-medium">Education</h4>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl p-8  py-4 pl-5 pr-3 space-y-2 mb-6 bg-primary transition duration-200 ease-in-out border-1 border-primary"
        >
          <div className="flex flex-col space-y-2 ">
            <span className="text-xs text-tertiary">{item.date}</span>
            <div className="flex items-center space-x-2">
              {item.link ? (
                <ConfirmModal
                  triggerButton={
                    <span className="text-xl text-secondary font-bold gradient-underline-animation">
                      {item.title}
                    </span>
                  }
                  onConfirm={() => window.open(item.link, "_blank")}
                  className="bg-primary text-primary w-full md:w-2/12 lg:w-[350px]"
                  content="Are you sure you want to proceed ? You will be redirected to the website."
                />
              ) : (
                <span className="text-xl font-bold text-secondary">
                  {item.title}
                </span>
              )}
            </div>
            <span className="mt-2 text-tertiary">{item.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
