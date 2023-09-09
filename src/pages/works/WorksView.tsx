import PageLayout from "../../shared/components/layouts/PageLayout";
import { WorksViewModelProps } from "./WorksViewModel";
import WorkSection from "./components/WorksSection";

type WorksViewComponent = React.FC<WorksViewModelProps>;

const WorksView: WorksViewComponent = ({ works }) => {
  return (
    <PageLayout title="Works">
      <div className="px-2 sm:px-5 md:px-10 lg:px-14 px-4 md:px-0">
        <WorkSection items={works} />
      </div>
    </PageLayout>
  );
};

export default WorksView;
