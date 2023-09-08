import { FiCode, FiLayout, FiPackage, FiServer, FiTool } from "react-icons/fi";
import { SiMaterialdesignicons } from "react-icons/si";
import { StackProps } from "../../ResumeViewModel";

type StackSectionProps = {
  stack: StackProps;
};

type StackSectionComponent = React.FC<StackSectionProps>;

const StackSection: StackSectionComponent = ({ stack }) => {
  return (
    <div className="flex flex-col flex-wrap lg:flex-row">
      <ul className="list-none list-inside space-y-2 lg:mr-6">
        {stack.languages && (
          <li>
            <span>
              <FiCode className="inline-block mr-2" />
              Languages:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {stack.languages.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {stack.frameworks && (
          <li>
            <span>
              <FiLayout className="inline-block mr-2" />
              Frameworks:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {stack.frameworks.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {stack.libraries && (
          <li>
            <span>
              <FiPackage className="inline-block mr-2" />
              Libraries:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {stack.libraries.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {stack.databases && (
          <li>
            <span>
              <FiServer className="inline-block mr-2" />
              Databases:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {stack.databases.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {stack.tools && (
          <li>
            <span>
              <FiTool className="inline-block mr-2" />
              Tools:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {stack.tools.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {stack.architectures && (
          <li>
            <span>
              <SiMaterialdesignicons className="inline-block mr-2" />
              Architectures:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {stack.architectures.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default StackSection;
