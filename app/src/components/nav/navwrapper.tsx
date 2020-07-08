import React from "react";
import Home from "../home";
import Blog from "../blog";
import About from "../about";
import Contact from "../contact";
import Articles from "../articles";
import JsEditor from "../projects/jseditor";
import BlogHelper from "../../helpers/bloghelper";
import SortVisualizer from "../projects/sortvisualizer";
import PathFindingVisualizer from "../projects/pathfindingvisualizer";

interface Props {
  match: any;
}

const NavWrapper: React.FunctionComponent<Props> = (props) => {
  const getComponentForArticle = (url: string) => {
    let urlSplit = url.split("/");
    let blogPath = urlSplit[2];

    if (blogPath) {
      let blogs = BlogHelper.getAllBlogs();
      let blog = undefined;

      for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].url === blogPath) {
          blog = blogs[i];
          break;
        }
      }

      if (blog) {
        // scroll window to top, otherwise scroll
        // will be at position where user left
        window.scrollTo(0, 0);

        return (
          <Blog
            title={blog.title}
            publishedAt={blog.publishedAt}
            contentHTML={blog.descriptionHTML}
          />
        );
      }
    }

    return null;
  };

  const getComponentForProjects = (url: string) => {
    let project = null;

    switch (url) {
      case "/projects/sorting-visualizer":
        project = <SortVisualizer />;
        break;
      case "/projects/path-finding-visualizer":
        project = <PathFindingVisualizer />;
        break;
      case "/projects/js-editor":
        project = <JsEditor />;
        break;
    }

    return project;
  };

  const getComponenetToRender = (url: string) => {
    let component = null;

    // check for general urls
    switch (url) {
      case "/":
        component = <Home />;
        break;
      case "/about":
        component = <About />;
        break;
      case "/contact":
        component = <Contact />;
        break;
      case "/articles":
        component = <Articles />;
        break;
    }

    // check if the url is for projects
    if (!component) {
      component = getComponentForProjects(url);
    }

    // check for article url
    if (!component) {
      component = getComponentForArticle(url);
    }

    return component;
  };

  return getComponenetToRender(props.match.url);
};

export default NavWrapper;
