import { Outlet, Navigate } from "react-router-dom";
import GridLayout from "../shared/components/layouts/GridLayout";
import FlexLayout from "../shared/components/layouts/FlexLayout";

import { RouteConfig } from "../shared/routing/routingService";
import {
  resumePresenter,
  translatingService,
  worksPresenter,
} from "../shared/composition";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notFound/NotFound";
import Resume from "../pages/resume/ResumeView";
import Works from "../pages/works/WorksContainer";

const pageRoutes = (root: string) => [
  {
    path: root,
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "resume",
    element: <Resume presenter={resumePresenter} />,
  },
  {
    path: "works",
    element: <Works presenter={worksPresenter} />,
  },
];

const routes: RouteConfig[] = [
  {
    path: "/fr",
    element: (
      <GridLayout>
        <Outlet />
      </GridLayout>
    ),
    children: pageRoutes("/fr"),
  },
  {
    path: "/en",
    element: (
      <GridLayout>
        <Outlet />
      </GridLayout>
    ),
    children: pageRoutes("/en"),
  },
  {
    path: "/",
    element: <Navigate to={translatingService.language} />,
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
