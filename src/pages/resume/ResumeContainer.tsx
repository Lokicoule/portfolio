import { useEffect, useState } from "react";
import { experienceRepository } from "../../shared/composition";
import ResumeView from "./components/ResumeView";
import { ResumeViewModel } from "./domainObjects/ResumeViewModel";
import { ResumePresenter } from "./ResumePresenter";
import { useTheme } from "../../shared/components/theme/ThemeProvider";

type ResumeContainerProps = {
  presenter: ResumePresenter;
};
type ResumeContainerComponent = React.FC<ResumeContainerProps>;

const ResumeContainer: ResumeContainerComponent = ({ presenter }) => {
  const { lang } = useTheme();

  const [resume, setResume] = useState<ResumeViewModel>(
    new ResumeViewModel({
      experiences: [],
      educationItems: [],
      lineItems: [],
    })
  );

  useEffect(() => {
    presenter.rebuildViewModel(lang, experienceRepository);

    const fetchResumeProps = () => {
      const resume = presenter.getViewModel();
      setResume(resume);
    };

    fetchResumeProps();
  }, [lang]);

  return (
    <ResumeView
      experiences={resume.experiences}
      educationItems={resume.educationItems}
      lineItems={resume.lineItems}
    />
  );
};

export default ResumeContainer;
