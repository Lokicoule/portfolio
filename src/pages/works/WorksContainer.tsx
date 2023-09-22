import PageLayout from "../../shared/components/layouts/PageLayout";
import { NotificationService } from "../../shared/notifications/notificationsService";
import { WorksController } from "./WorksController";
import { WorksPresenter } from "./WorksPresenter";
import WorksView from "./WorksView";

type WorksContainerProps = {
  presenter: WorksPresenter;
  controller: WorksController;
};

type WorksContainerComponent = React.FC<WorksContainerProps>;

const WorksContainer: WorksContainerComponent = ({ presenter, controller }) => {
  const handleFilterClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const filter = event.currentTarget.dataset.filter;
    if (filter) {
      controller.setWorkFilter(filter);
    }
  };

  return (
    <PageLayout title="Works" className="lg:rounded-2xl bg-primary">
      {NotificationService.makeNotifiable(
        <WorksView presenter={presenter} onFilterChange={handleFilterClick} />
      )}
    </PageLayout>
  );
};

export default WorksContainer;
