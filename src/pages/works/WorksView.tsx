import { useEffect, useState } from "react";
import { GoRepo } from "react-icons/go";
import SocialLinks from "../../shared/components/social-links/SocialLinks";
import { WorksPresenter } from "./WorksPresenter";
import { WorksViewModel } from "./WorksViewModel";
import WorkModal from "./components/WorkModal/WorkModal";

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
        <ul className="flex w-full justify-center flex-wrap font-medium pb-6 space-x-8">
          <li
            data-filter="all"
            onClick={onFilterChange}
            className={`text-secondary cursor-pointer ${
              viewModel.filter === "all"
                ? "gradient-underline-animation"
                : "gradient-underline-animation-secondary"
            }`}
          >
            All
          </li>
          <li
            data-filter="backend"
            onClick={onFilterChange}
            className={`text-secondary cursor-pointer ${
              viewModel.filter === "backend"
                ? "gradient-underline-animation"
                : "gradient-underline-animation-secondary"
            }`}
          >
            Backend
          </li>
          <li
            data-filter="frontend"
            onClick={onFilterChange}
            className={`text-secondary cursor-pointer ${
              viewModel.filter === "frontend"
                ? "gradient-underline-animation"
                : "gradient-underline-animation-secondary"
            }`}
          >
            Frontend
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-14">
        {viewModel.works.map((item) => (
          <div
            key={item.id}
            className="rounded-xl p-8 bg-primary border-1 border-primary"
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

            <SocialLinks socialLinks={item.socialLinks} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WorksView;
