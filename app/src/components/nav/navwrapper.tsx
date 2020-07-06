import React from "react";
import Home from "../home";
import About from "../about";
import Contact from "../contact";
import Articles from "../articles";

interface Props {
  match: any;
}

const NavWrapper: React.FunctionComponent<Props> = (props) => {
  const getComponenetToRender = (url: string) => {
    let component: JSX.Element = <React.Fragment />;
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

    return component;
  };

  return getComponenetToRender(props.match.url);
};

export default NavWrapper;