import { HelmetProvider } from "react-helmet-async";
import { routingService } from "../shared/composition";
import routes from "./routing";
import { ThemeProvider } from "../shared/persistence/theme";

const AppShell = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>{routingService.createRoutes(routes)}</ThemeProvider>
    </HelmetProvider>
  );
};

export default AppShell;
