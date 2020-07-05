import React from "react";
import NotFound from "../error/notfound";
import NavWrapper from "../nav/navwrapper";
import NavItem from "../nav/typings/navitem";
import { Route, Switch } from "react-router-dom";

interface Props {
  pages: NavItem[];
}

const Main: React.FunctionComponent<Props> = (props) => {
  const getRoutes = (items: NavItem[]): JSX.Element[] => {
    if (items) {
      let routes: JSX.Element[] = [];
      items.forEach((item: NavItem) => {
        let route = (
          <Route
            exact={true}
            key={`nav-item-route-${item.id}`}
            // only add link if item has no children
            path={item.children ? "#" : item.url}
            component={NavWrapper}
          />
        );

        routes.push(route);

        if (item.children && item.children.length) {
          let childRoutes = getRoutes(item.children);
          if (childRoutes) {
            routes.push(...childRoutes);
          }
        }
      });

      return routes;
    }

    return [];
  };

  return (
    <main role="main" className="container main-content">
      <div className="row">
        <Switch>
          {getRoutes(props.pages)}
          <Route component={NotFound} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
