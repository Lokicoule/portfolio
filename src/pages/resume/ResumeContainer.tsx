import { useEffect, useState } from "react";
import { ResumePresenter } from "./ResumePresenter";
import ResumeView from "./components/ResumeView";
import { ResumeViewModel } from "./ResumeViewModel";

type ResumeContainerProps = {
  presenter: ResumePresenter;
};
type ResumeContainerComponent = React.FC<ResumeContainerProps>;

const ResumeContainer: ResumeContainerComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<ResumeViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => {
      console.log("loaded resume presenter");
      console.log(vm);
      setViewModel(vm);
    });

    /* return () => {
      console.log("unloaded resume presenter");
      presenter.unload();
    }; */
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <ResumeView
      experiences={viewModel.experiences}
      educationItems={viewModel.educationItems}
      lineItems={viewModel.lineItems}
    />
  );
};

export default ResumeContainer;
