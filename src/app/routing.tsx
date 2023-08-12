import { Outlet } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notFound/NotFound";
import Resume from "../pages/resume/Resume";
import Layout from "../shared/components/layout/Layout";
import { RouteConfig } from "../shared/routing/routingService";

const routes: RouteConfig[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
