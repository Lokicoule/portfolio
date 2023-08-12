import { Helmet } from "react-helmet-async";

export type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Loik Fekkai</title>
    </Helmet>
  );
};

export default PageTitle;
