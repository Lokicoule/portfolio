import React from "react";
import { EducationProps } from "../../ResumeViewModel";
import Tooltip from "../../../../shared/components/tooltip/Tooltip";

type EducationItemProps = {
  item: EducationProps;
};

const EducationItem: React.FC<EducationItemProps> = ({ item }) => {
  const renderTooltip = () => {
    if (item.internship) {
      return (
        <Tooltip text={item.internship.duration ?? ""}>
          <span className="text-xs text-tertiary">
            @{item.internship.company}
            <span className="text-[#0072b1]">*</span>
          </span>
        </Tooltip>
      );
    }
    return null;
  };

  return (
    <div
      key={item.id}
      className="rounded-xl p-8 py-4 pl-5 pr-3 space-y-2 mb-6 bg-primary border-1 border-primary"
    >
      <div className="flex flex-col space-y-2 ">
        <div className="flex justify-between">
          <span className="text-xs text-tertiary">{item.date}</span>
          {renderTooltip()}
        </div>
        <div className="flex items-center space-x-2">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              <span className="text-xl text-secondary font-bold gradient-underline-animation p-1">
                {item.title}
              </span>
            </a>
          ) : (
            <span className="text-xl font-bold text-secondary">
              {item.title}
            </span>
          )}
        </div>
        <span className="mt-2 text-tertiary">{item.place}</span>
        <span className="text-tertiary">{item.level}</span>
      </div>
    </div>
  );
};

export default EducationItem;
