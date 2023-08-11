import App from "../App";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notFound/NotFound";
import Resume from "../pages/resume/Resume";
import { RouteConfig } from "../shared/routing/routingService";

const routes: RouteConfig[] = [
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
];

export default routes;
