import { FiCode, FiLayout, FiPackage, FiServer, FiTool } from "react-icons/fi";
import { SiMaterialdesignicons } from "react-icons/si";

export interface StackProps {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  tools?: string[];
  architectures?: string[];
  databases?: string[];
}

type StackComponent = React.FC<StackProps>;

const Stack: StackComponent = ({
  languages,
  frameworks,
  libraries,
  tools,
  architectures,
  databases,
}) => {
  return (
    <div className="flex flex-col flex-wrap lg:flex-row">
      <ul className="list-none list-inside space-y-2 lg:mr-6">
        {languages && (
          <li>
            <span>
              <FiCode className="inline-block mr-2" />
              Languages:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {languages.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {frameworks && (
          <li>
            <span>
              <FiLayout className="inline-block mr-2" />
              Frameworks:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {frameworks.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {libraries && (
          <li>
            <span>
              <FiPackage className="inline-block mr-2" />
              Libraries:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {libraries.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {databases && (
          <li>
            <span>
              <FiServer className="inline-block mr-2" />
              Databases:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {databases.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {tools && (
          <li>
            <span>
              <FiTool className="inline-block mr-2" />
              Tools:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {tools.map((item, i) => (
                <span key={i} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </li>
        )}
        {architectures && (
          <li>
            <span>
              <SiMaterialdesignicons className="inline-block mr-2" />
              Architectures:&nbsp;
            </span>
            <div className="flex gap-y-2.5 gap-x-2.5 flex-wrap">
              {architectures.map((item, i) => (
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

export default Stack;
