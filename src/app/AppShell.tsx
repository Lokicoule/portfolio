import "react-toastify/dist/ReactToastify.css";

import { HelmetProvider } from "react-helmet-async";
import { routingService, themeController } from "../shared/composition";
import routes from "./routing";

const AppShell = () => {
  const ThemeProvider = themeController.createProvider();

  return (
    <HelmetProvider>
      <ThemeProvider>{routingService.createRoutes(routes)}</ThemeProvider>
    </HelmetProvider>
  );
};

export default AppShell;
