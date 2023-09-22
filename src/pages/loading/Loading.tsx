type LoadingProps = {
  className?: string;
};

type LoadingComponent = React.FC<LoadingProps>;

const Loading: LoadingComponent = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-full bg-primary ${className}`}
    >
      <div className="flex items-center justify-center w-12 h-12 border-2 border-solid border-white rounded-full animate-spin">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
