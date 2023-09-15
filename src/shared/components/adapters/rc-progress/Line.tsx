import { Line as RCLine } from "rc-progress";
import { useTheme } from "../../theme/ThemeProvider";

type LineProps = {
  name: string;
  value: number;
  color: string;
};

const Line: React.FC<LineProps> = ({ name, value, color }) => {
  const { mode } = useTheme();

  return (
    <div className=" mb-7">
      <div className="flex justify-between py-1">
        <span className=" text-base  font-semibold dark:text-[#A6A6A6]">
          {name}
        </span>
        <span className=" text-base font-semibold pr-5 dark:text-[#A6A6A6]">
          {value}%
        </span>
      </div>

      <RCLine
        percent={value}
        strokeWidth={1}
        trailWidth={1}
        trailColor={`${mode === "dark" ? "#1C1C1C" : "#FFF"}`}
        strokeColor={color}
      />
    </div>
  );
};

export default Line;
