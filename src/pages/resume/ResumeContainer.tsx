import { useEffect, useState } from "react";
import { ResumePresenter } from "./ResumePresenter";
import ResumeView from "./ResumeView";
import { ResumeViewModel } from "./ResumeViewModel";

type ResumeContainerProps = {
  presenter: ResumePresenter;
};
type ResumeContainerComponent = React.FC<ResumeContainerProps>;

const ResumeContainer: ResumeContainerComponent = ({ presenter }) => {
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
    <ResumeView
      experiences={viewModel.experiences}
      educations={viewModel.educations}
      skills={viewModel.skills}
      knowledges={viewModel.knowledges}
    />
  );
};

export default ResumeContainer;
