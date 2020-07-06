import classNames from "classnames";
import React, { useState } from "react";
import NavItem from "./typings/navitem";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

interface Props {
  items: NavItem[];
}

const Navigator: React.FunctionComponent<Props> = (props) => {
  let location = useLocation();
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  const onNavItemClick = (url: string) => {
    if (selectedPath !== url) {
      setSelectedPath(url);
    }
  };

  const getChildNavLinks = (items: NavItem[]) => {
    return items.map((item: NavItem) => {
      return (
        <NavDropdown.Item
          key={`nav-dropdown-item-${item.id}`}
          as={Link}
          to={item.url}
          onClick={() => {
            onNavItemClick(item.url);
          }}
          className={classNames({ active: selectedPath === item.url })}
        >
          {item.name}
        </NavDropdown.Item>
      );
    });
  };

  // get nav items
  const getNavLinks = (items: NavItem[]) => {
    return items.map((item: NavItem) => {
      if (item.children) {
        let childItems = getChildNavLinks(item.children);
        return (
          <NavDropdown
            title="Projects"
            className="px-3"
            id="collasible-nav-dropdown"
            key={`nav-dropdown-${item.id}`}
          >
            {childItems}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link
            as={Link}
            to={item.url}
            onClick={() => {
              onNavItemClick(item.url);
            }}
            key={`nav-link-item-${item.id}`}
            className={classNames("px-3", {
              active: selectedPath === item.url,
            })}
          >
            {item.name}
          </Nav.Link>
        );
      }
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">{getNavLinks(props.items)}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
