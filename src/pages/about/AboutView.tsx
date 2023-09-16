import { useEffect, useState } from "react";
import PageLayout from "../../shared/components/layouts/PageLayout";
import { AboutPresenter } from "./AboutPresenter";
import { AboutViewModel } from "./AboutViewModel";

type AboutViewProps = {
  presenter: AboutPresenter;
};

type AboutViewComponent = React.FC<AboutViewProps>;

const AboutView: AboutViewComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<AboutViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout title="About">
      <div className="container mx-auto px-4 md:px-10 lg:px-14">
        <p className="text-lg leading-8 mb-6 text-gray-500 dark:text-gray-400">
          I am a software engineer with a strong interest in software
          architecture and design. I am passionate about the Web and everything
          related to it. I am also interested in the{" "}
          <span className="font-semibold">Web 3.0</span> and the{" "}
          <span className="font-semibold">decentralized web</span>. I am always
          looking for new challenges and opportunities to learn new things.
        </p>
      </div>

      <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
        <h3 className="text-[35px] dark:text-white font-medium pb-5">
          What I do!
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
          {viewModel.services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#05151e] rounded-xl p-8  dark:hover:shadow-xl transition duration-200 ease-in-out dark:hover:bg-[#121e26] border-[1px] border-gray-200 dark:border-gray-700 hover:bg-[#FAFAFA]"
            >
              <div className="flex items-center mb-5">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-4xl text-[#F95054]">{service.icon}</div>
                  <h4 className="text-3xl dark:text-white font-medium">
                    {service.title}
                  </h4>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutView;
