import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export class RoutingService {
  public createRoutes(routes: RouteConfig[]): React.ReactNode {
    return (
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </Router>
    );
  }
}
