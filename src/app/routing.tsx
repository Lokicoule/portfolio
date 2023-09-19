import { Navigate, Outlet } from "react-router-dom";
import Layout from "../shared/components/layouts/Layout";

import {
  aboutPresenter,
  resumePresenter,
  translatingService,
  worksPresenter,
} from "../shared/composition";
import { RouteConfig } from "../shared/routing/routingService";

import About from "../pages/about/AboutView";
import Contact from "../pages/contact/ContactContainer";
import Resume from "../pages/resume/ResumeView";
import Works from "../pages/works/WorksView";

const pageRoutes = (root: string) => [
  {
    path: root,
    element: <About presenter={aboutPresenter} />,
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
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: pageRoutes("/fr"),
  },
  {
    path: "/en",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: pageRoutes("/en"),
  },
  {
    path: "*",
    element: <Navigate to={translatingService.language} />,
  },
];

export default routes;
