type TagProps = {
  text: string;
  className?: string;
  icon?: {
    element: React.ReactNode;
    className?: string;
  };
};

type TagComponent = React.FC<TagProps>;

export const Tag: TagComponent = ({ text, className, icon }) => {
  return (
    <div className="flex items-center p-2 rounded-full bg-tertiary text-tertiary">
      <div className={className}>
        {icon && (
          <div
            className={`flex items-center justify-center px-5 py-2 rounded-lg h-6 w-6 mr-2`}
          >
            <span className={icon.className}>{icon.element}</span>
          </div>
        )}
        <span>{text}</span>
      </div>
    </div>
  );
};
