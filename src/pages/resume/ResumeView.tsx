import PageLayout from "../../shared/components/layouts/PageLayout";
import { ResumeViewModelProps } from "./ResumeViewModel";
import EducationSection from "./components/education/EducationSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import KnowledgeSection from "./components/knowledge/KnowledgeSection";
import SkillSection from "./components/skill/SkillSection";

type ResumeViewComponent = React.FC<ResumeViewModelProps>;

const ResumeView: ResumeViewComponent = ({
  experiences,
  educations,
  skills,
  knowledges,
}) => {
  return (
    <PageLayout title="Resume">
      <div className="px-2 sm:px-5 md:px-10 lg:px-14 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          <ExperienceSection items={experiences} />
          <EducationSection items={educations} />
        </div>
      </div>

      <div className="container py-12 px-2 sm:px-5 md:px-10 lg:px-14 bg-[#F3F6F6]">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <SkillSection items={skills} />
          </div>

          <div className="col-span-1">
            <KnowledgeSection items={knowledges} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumeView;
