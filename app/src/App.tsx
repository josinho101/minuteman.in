import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";
import navJson from "./components/nav/navtree.json";
import NavItem from "./components/nav/typings/navitem";

const App: React.FunctionComponent = () => {
  const navRoot: NavItem = JSON.parse(JSON.stringify(navJson));
  return (
    <div className="container">
      <Header />
      <Nav items={navRoot.children} />
      <Footer />
    </div>
  );
};

export default App;
