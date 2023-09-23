import { MdOutlineBusinessCenter } from "react-icons/md";
import { EducationProps } from "../../ResumeViewModel";

export type EducationSectionProps = {
  items: EducationProps[];
  title: string;
};

const EducationSection: React.FC<EducationSectionProps> = ({
  items,
  title,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-4xl text-[#0072b1]">
          <MdOutlineBusinessCenter />
        </div>
        <h4 className="text-3xl text-secondary font-medium">{title}</h4>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl p-8 pl-5 pr-3 space-y-2 mb-6 bg-primary border-1 border-primary"
        >
          <div className="flex flex-col space-y-2 ">
            <span className="text-xs text-tertiary">{item.date}</span>
            <div className="flex items-center space-x-2">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <span className="text-xl text-secondary font-bold gradient-underline-animation">
                    {item.title}
                  </span>
                </a>
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
