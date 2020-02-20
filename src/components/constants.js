import home from "../pages/home";
import NoMatch from "./noMatch";

const { Home } = home;

// eslint-disable-next-line import/prefer-default-export
export const RoutesData = [
  {
    component: Home,
    exact: true,
    path: "/"
  },
  {
    component: NoMatch,
    exact: true,
    path: "*"
  }
];
