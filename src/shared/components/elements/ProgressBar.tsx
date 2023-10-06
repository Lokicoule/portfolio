type ProgressBarProps = {
  progress: number;
  bgColor?: string;
};

type ProgressBarComponent = React.FC<ProgressBarProps>;

const ProgressBar: ProgressBarComponent = ({ progress, bgColor }) => {
  return (
    <div className={`relative w-full bg-primary rounded h-3`}>
      <div
        className={`absolute top-0 left-0 bg-primary rounded ${bgColor} h-3`}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
