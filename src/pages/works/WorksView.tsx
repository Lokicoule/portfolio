import { useEffect, useState } from "react";
import { WorksPresenter } from "./WorksPresenter";
import { WorksViewModel } from "./WorksViewModel";
import FilterWorksList from "./components/FilterWorksList";
import WorkList from "./components/WorkList";

type WorksViewProps = {
  presenter: WorksPresenter;
  onFilterChange: (event: React.MouseEvent<HTMLLIElement>) => void;
};

type WorksViewComponent = React.FC<WorksViewProps>;

const WorksView: WorksViewComponent = ({ presenter, onFilterChange }) => {
  const [viewModel, setViewModel] = useState<WorksViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-10 lg:px-14">
        <FilterWorksList
          onFilterChange={onFilterChange}
          filter={viewModel.filter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-14">
        <WorkList works={viewModel.works} />
      </div>
    </>
  );
};

export default WorksView;
