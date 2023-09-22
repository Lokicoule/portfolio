import { useEffect, useState } from "react";
import PageLayout from "../../shared/components/layouts/PageLayout";
import { ResumePresenter } from "./ResumePresenter";
import { ResumeViewModel } from "./ResumeViewModel";
import EducationSection from "./components/education/EducationSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import KnowledgeSection from "./components/knowledge/KnowledgeSection";
import SkillSection from "./components/skill/SkillSection";

type ResumeViewProps = {
  presenter: ResumePresenter;
};

type ResumeViewComponent = React.FC<ResumeViewProps>;

const ResumeView: ResumeViewComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<ResumeViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));

    // in that case the subscription is lost
    //return () => presenter.unload();
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout
      title="Resume"
      description="Resume Loik Fekkai, a fullstack engineer based in Mimizan, France."
      className="lg:rounded-2xl lg:bg-primary h-full"
    >
      <div className="px-2 sm:px-5 md:px-10 lg:px-14 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          <ExperienceSection items={viewModel.experiences} />
          <EducationSection items={viewModel.educations} />
        </div>
      </div>

      <div className="container py-12 px-2 sm:px-5 md:px-10 lg:px-14 bg-secondary">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <SkillSection items={viewModel.skills} />
          </div>

          <div className="col-span-1">
            <KnowledgeSection items={viewModel.knowledges} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumeView;
