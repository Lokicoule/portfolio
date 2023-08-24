import "react-toastify/dist/ReactToastify.css";

import { HelmetProvider } from "react-helmet-async";
import { routingService, themeController } from "../shared/composition";
import routes from "./routing";
import ThemeContainer from "../shared/components/theme/ThemeContainer";

const AppShell = () => {
  const ThemeProvider = themeController.createProvider();

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ThemeContainer>{routingService.createRoutes(routes)}</ThemeContainer>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default AppShell;
