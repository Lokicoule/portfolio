import { useEffect, useState } from "react";
import { GoRepo } from "react-icons/go";
import PageLayout from "../../shared/components/layouts/PageLayout";
import SocialLinks from "../../shared/components/social-links/SocialLinks";
import { WorksPresenter } from "./WorksPresenter";
import { WorksViewModel } from "./WorksViewModel";
import WorkModal from "./components/WorkModal/WorkModal";

type WorksViewProps = {
  presenter: WorksPresenter;
};

type WorksViewComponent = React.FC<WorksViewProps>;

const WorksView: WorksViewComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<WorksViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout title="Works">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-14">
        {viewModel.works.map((item) => (
          <div
            key={item.id}
            className="bg-primary rounded-xl p-8  dark:hover:shadow-xl transition duration-200 ease-in-out dark:hover:bg-[#121e26] border-[1px] border-primary-light dark:border-primary-dark hover:bg-[#FAFAFA]"
          >
            <div className="mb-2 flex items-center space-x-2">
              <GoRepo className="text-xl text-tertiary" />
              <WorkModal
                triggerButton={
                  <button className="text-xl font-bold text-primary gradient-underline-animation">
                    {item.name}
                  </button>
                }
                work={item}
              />
            </div>

            <p className="text-secondary">
              {item.description.slice(0, 120)}...
            </p>

            <div className="flex flex-wrap items-center space-x-2">
              <SocialLinks socialLinks={item.socialLinks} />
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default WorksView;
