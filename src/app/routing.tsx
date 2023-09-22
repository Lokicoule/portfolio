import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../shared/components/layouts/Layout";

import Loading from "../pages/loading/Loading";
import {
  aboutPresenter,
  resumePresenter,
  translatingService,
  worksController,
  worksPresenter,
} from "../shared/composition";
import { RouteConfig } from "../shared/routing/routingService";

import About from "../pages/about";
import Contact from "../pages/contact";
import Resume from "../pages/resume";
import Works from "../pages/works";

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
    element: <Works presenter={worksPresenter} controller={worksController} />,
  },
];

const routes: RouteConfig[] = [
  {
    path: "/fr",
    element: (
      <Layout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: pageRoutes("/fr"),
  },
  {
    path: "/en",
    element: (
      <Layout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
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
