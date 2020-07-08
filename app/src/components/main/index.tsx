import React from "react";
import NotFound from "../error/notfound";
import NavWrapper from "../nav/navwrapper";
import NavItem from "../nav/typings/navitem";
import { Route, Switch } from "react-router-dom";
import BlogHelper from "../../helpers/bloghelper";
import Blog from "../blog/typings/blog";

interface Props {
  pages: NavItem[];
}

const Main: React.FunctionComponent<Props> = (props) => {
  const getNavRoutes = (items: NavItem[]): JSX.Element[] => {
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
          let childRoutes = getNavRoutes(item.children);
          if (childRoutes) {
            routes.push(...childRoutes);
          }
        }
      });

      return routes;
    }

    return [];
  };

  const getBlogPreviewRoutes = () => {
    let blogs = BlogHelper.getAllBlogs();

    if (blogs) {
      let blogPreviewRoutes = blogs.map((blog: Blog, index: number) => {
        return (
          <Route
            exact={true}
            key={`blog-preview-route-${index}`}
            path={`/articles/${blog.url}`}
            component={NavWrapper}
          />
        );
      });

      return blogPreviewRoutes;
    }
  };

  return (
    <main role="main" className="container main-content">
      <div className="row">
        <Switch>
          {getNavRoutes(props.pages)}
          {getBlogPreviewRoutes()}
          <Route component={NotFound} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
