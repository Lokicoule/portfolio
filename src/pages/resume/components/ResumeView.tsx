import PageLayout from "../../../shared/components/layouts/PageLayout";
import Line from "../../../shared/components/line/Line";
import { ResumeViewModelProps } from "../domainObjects/ResumeViewModel";
import ExperienceSection from "./experience/ExperienceSection";

type ResumeViewComponent = React.FC<ResumeViewModelProps>;

const ResumeView: ResumeViewComponent = ({
  experiences,
  /*   educationItems,
   */ lineItems,
}) => {
  return (
    <PageLayout title="Resume">
      <div className="px-2 sm:px-5 md:px-10 lg:px-14 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          <ExperienceSection items={experiences} />
          {/*           <EducationSection items={educationItems} />
           */}{" "}
        </div>
      </div>

      <div className="container py-12 px-2 sm:px-5 md:px-10 lg:px-14 bg-[#F3F6F6]">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h4 className="text-3xl dark:text-white font-medium mb-6">
              Working Skills
            </h4>
            {lineItems.map((item, i) => (
              <Line
                color={item.color}
                name={item.name}
                value={item.number}
                key={i}
              />
            ))}
          </div>

          <div className="col-span-1">
            <h4 className="text-3xl dark:text-white font-medium mb-8">
              Knowledges
            </h4>

            <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
              <button className="resume-btn">Digital Design</button>
              <button className="resume-btn">Marketing</button>
              <button className="resume-btn">Social Media</button>
              <button className="resume-btn">Print</button>
              <button className="resume-btn">Time Management</button>
              <button className="resume-btn">Flexibility</button>
              <button className="resume-btn">Print</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumeView;
