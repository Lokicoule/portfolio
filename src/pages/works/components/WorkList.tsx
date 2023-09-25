import React from "react";
import { GoRepo } from "react-icons/go";
import SocialLinks from "../../../shared/components/social-links/SocialLinks";
import { WorkProps } from "../WorksViewModel";
import WorkModal from "./WorkModal/WorkModal";

type WorkListProps = {
  works: WorkProps[];
};

type WorkListComponent = React.FC<WorkListProps>;

const WorkList: WorkListComponent = ({ works }) => {
  return (
    <>
      {works.map((item) => (
        <div
          key={item.id}
          className="rounded-xl p-8 bg-primary border-1 border-primary"
        >
          <div className="mb-2 flex items-center space-x-2">
            <GoRepo className="text-xl text-tertiary" />
            <WorkModal
              triggerButton={
                <button className="text-xl font-bold text-primary gradient-underline-animation p-1 lowercase">
                  {item.name}
                </button>
              }
              work={item}
            />
          </div>

          <p className="text-secondary">{item.description.slice(0, 120)}...</p>

          <div className="mt-4">
            <SocialLinks socialLinks={item.socialLinks} />
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkList;
