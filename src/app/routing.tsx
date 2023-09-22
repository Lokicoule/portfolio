import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../shared/components/layouts/Layout";

import {
  aboutPresenter,
  resumePresenter,
  translatingService,
  worksController,
  worksPresenter,
} from "../shared/composition";
import { RouteConfig } from "../shared/routing/routingService";
import Loading from "../pages/loading/Loading";

const About = lazy(() => import("../pages/about/AboutView"));
const Contact = lazy(() => import("../pages/contact/ContactContainer"));
const Resume = lazy(() => import("../pages/resume/ResumeView"));
const Works = lazy(() => import("../pages/works/WorksContainer"));

const pageRoutes = (root: string) => [
  {
    path: root,
    element: (
      <Suspense fallback={<Loading />}>
        <About presenter={aboutPresenter} />
      </Suspense>
    ),
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "resume",
    element: (
      <Suspense fallback={<Loading />}>
        <Resume presenter={resumePresenter} />
      </Suspense>
    ),
  },
  {
    path: "works",
    element: (
      <Suspense fallback={<Loading />}>
        <Works presenter={worksPresenter} controller={worksController} />
      </Suspense>
    ),
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
