import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
  children?: RouteConfig[];
}

export class RoutingService {
  public createRoutes(routes: RouteConfig[]): JSX.Element {
    return (
      <Router>
        <Routes>{this.createRouteComponents(routes)}</Routes>
      </Router>
    );
  }

  private createRouteComponents(routes: RouteConfig[]): JSX.Element[] {
    return routes.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children && this.createRouteComponents(children)}
      </Route>
    ));
  }
}
