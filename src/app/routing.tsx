import { Outlet } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notFound/NotFound";
import Resume from "../pages/resume/Resume";
import GridLayout from "../shared/components/layouts/GridLayout";
import FlexLayout from "../shared/components/layouts/FlexLayout";
import { RouteConfig } from "../shared/routing/routingService";

const routes: RouteConfig[] = [
  {
    path: "/",
    element: (
      <GridLayout>
        <Outlet />
      </GridLayout>
    ),
    children: [
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
    ],
  },
  {
    path: "*",
    element: (
      <FlexLayout>
        <NotFound />
      </FlexLayout>
    ),
  },
];

export default routes;
