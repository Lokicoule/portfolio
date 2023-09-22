import { Helmet } from "react-helmet-async";

export type HeadProps = {
  title: string;
  description?: string;
};

const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Helmet title={`${title} - Loik Fekkai | Fullstack Engineer Portfolio`}>
      <link rel="canonical" href="https://loikfekkai.dev" />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
