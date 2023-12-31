import { useEffect, useState } from "react";
import PageLayout from "../../shared/components/layouts/PageLayout";
import { AboutPresenter } from "./AboutPresenter";
import { AboutViewModel } from "./AboutViewModel";

type AboutViewProps = {
  presenter: AboutPresenter;
};

type AboutViewComponent = React.FC<AboutViewProps>;

const colors: string[] = [
  "text-[#a7ecee] font-extrabold",
  "text-[#9ac5f4] font-extrabold",
  "text-[#99dbf5] font-extrabold",
  "text-[#ffeebb] font-extrabold",
];

const AboutView: AboutViewComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<AboutViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout
      head={{
        title: presenter.translateAndSanitize("about.title"),
        description: presenter.translateAndSanitize("about.description.meta"),
      }}
      title={presenter.translateAndSanitize("about.title")}
      className="lg:rounded-2xl lg:bg-primary"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-14">
        <p
          className="text-lg leading-8 mb-6 text-tertiary text-justify"
          dangerouslySetInnerHTML={{
            __html: presenter.translateAndSanitize("about.description.content"),
          }}
        />
      </div>

      <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 className="text-[35px] text-secondary font-medium pb-5 font-primary">
          {presenter.translateAndSanitize("about.services")}
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {viewModel.services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-xl p-8 bg-primary border-1 border-primary"
            >
              <div className="flex items-center mb-5">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`text-4xl ${colors[index % colors.length]}`}>
                    {service.icon}
                  </div>
                  <h4 className="text-3xl text-primary font-medium lg:break-all xl:break-normal">
                    {service.title}
                  </h4>
                </div>
              </div>
              <p className="text-secondary text-justify">
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
