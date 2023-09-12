import { GoRepo } from "react-icons/go";
import PageLayout from "../../shared/components/layouts/PageLayout";
import SocialLinks from "../../shared/components/social-links/SocialLinks";
import { WorksViewModelProps } from "./WorksViewModel";
import WorkModal from "./components/WorkModal/WorkModal";

type WorksViewComponent = React.FC<WorksViewModelProps>;

const WorksView: WorksViewComponent = ({ works }) => {
  return (
    <PageLayout title="Works">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-14">
        {works.map((item) => (
          <div
            key={item.id}
            className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg rounded-lg transition-all duration-300 ease-in-out border-[1px] border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-transparent dark:hover:bg-[#1D1D1D]`}
          >
            <div className="mb-2 flex items-center space-x-2">
              <GoRepo className="text-xl text-gray-500 dark:text-gray-400" />
              <WorkModal
                triggerButton={
                  <button className="text-xl font-bold text-blue-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-blue-500">
                    {item.name}
                  </button>
                }
                work={item}
              />
            </div>

            <p className="text-gray-500 dark:text-gray-400">
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
