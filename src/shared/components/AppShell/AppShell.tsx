import { HelmetProvider } from "react-helmet-async";
import { routingService } from "../../composition";
import App from "../../../App";
import About from "../../../pages/about/About";
import Contact from "../../../pages/contact/Contact";
import Resume from "../../../pages/resume/Resume";
import NotFound from "../../../pages/notFound/NotFound";

const AppShell = () => {
  return (
    <HelmetProvider>
      {routingService.createRoutes([
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ])}
    </HelmetProvider>
  );
};

export default AppShell;
