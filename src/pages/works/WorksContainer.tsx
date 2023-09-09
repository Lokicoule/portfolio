import { useEffect, useState } from "react";
import { WorksPresenter } from "./WorksPresenter";
import WorksView from "./WorksView";
import { WorksViewModel } from "./WorksViewModel";

type WorksContainerProps = {
  presenter: WorksPresenter;
};
type WorksContainerComponent = React.FC<WorksContainerProps>;

const WorksContainer: WorksContainerComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<WorksViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return <WorksView works={viewModel.works} />;
};

export default WorksContainer;
