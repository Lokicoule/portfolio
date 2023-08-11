import { HelmetProvider } from "react-helmet-async";
import { routingService } from "../shared/composition";
import routes from "./routing";

const AppShell = () => {
  return <HelmetProvider>{routingService.createRoutes(routes)}</HelmetProvider>;
};

export default AppShell;
