import { Outlet } from "react-router-dom";
import GridLayout from "../shared/components/layouts/GridLayout";
import FlexLayout from "../shared/components/layouts/FlexLayout";

import { RouteConfig } from "../shared/routing/routingService";
import { resumePresenter, worksPresenter } from "../shared/composition";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notFound/NotFound";
import Resume from "../pages/resume/ResumeContainer";
import Works from "../pages/works/WorksContainer";

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
        path: "about",
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
    ],
  },
  {
    path: "/:lang",
    element: (
      <GridLayout>
        <Outlet />
      </GridLayout>
    ),
    children: [
      {
        path: "about",
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
