import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoutesData } from "./constants";

// eslint-disable-next-line import/prefer-default-export
export const Routes = () => {
  return (
    <Router>
      <Switch>
        {RoutesData.map(route => {
          const { path, component, exact } = route;
          return (
            <Route
              key={component}
              exact={exact}
              path={path}
              component={component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};
