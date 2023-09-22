import PageLayout from "../../shared/components/layouts/PageLayout";

type LoadingProps = {
  className?: string;
};

type LoadingComponent = React.FC<LoadingProps>;

const Loading: LoadingComponent = ({ className }) => {
  return (
    <div className="animate-pulse">
      <PageLayout
        title=""
        className={`${className}  h-full lg:rounded-2xl lg:bg-primary`}
      />
    </div>
  );
};

export default Loading;
