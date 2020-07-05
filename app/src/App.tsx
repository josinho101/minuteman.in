import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import navJson from "./components/nav/navtree.json";
import NavItem from "./components/nav/typings/navitem";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FunctionComponent = () => {
  const navRoot: NavItem = JSON.parse(JSON.stringify(navJson));
  return (
    <div className="container">
      <Header />
      <Router>
        <Nav items={navRoot.children} />
        <Main pages={navRoot.children} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
