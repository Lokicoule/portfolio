import { Helmet } from "react-helmet-async";

export type PageTitleProps = {
  title: string;
  description?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <Helmet title={`${title} - Loik Fekkai | Fullstack Engineer Portfolio`}>
      <link rel="canonical" href="https://loikfekkai.dev" />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default PageTitle;
