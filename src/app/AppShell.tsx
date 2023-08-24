import "react-toastify/dist/ReactToastify.css";

import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "../shared/components/theme/Theme";
import { routingService } from "../shared/composition";
import routes from "./routing";
import { ThemeContainer } from "../shared/components/theme/ThemeContainer";

const AppShell = () => {
  return (
    <ThemeProvider>
      <ThemeContainer>
        <HelmetProvider>{routingService.createRoutes(routes)}</HelmetProvider>
      </ThemeContainer>
    </ThemeProvider>
  );
};

export default AppShell;
