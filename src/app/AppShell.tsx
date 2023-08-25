import "react-toastify/dist/ReactToastify.css";

import { HelmetProvider } from "react-helmet-async";
import { routingService } from "../shared/composition";
import routes from "./routing";
import ThemeContainer from "../shared/components/theme/ThemeContainer";

const AppShell = () => {
  return (
    <HelmetProvider>
      <ThemeContainer>{routingService.createRoutes(routes)}</ThemeContainer>
    </HelmetProvider>
  );
};

export default AppShell;
