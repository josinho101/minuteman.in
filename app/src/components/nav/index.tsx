import React from "react";
import classNames from "classnames";
import NavItem from "./typings/navitem";
import { Link } from "react-router-dom";

interface Props {
  items: NavItem[];
}

const Nav: React.FunctionComponent<Props> = (props) => {
  // get child nav items
  const getChildItems = (children: NavItem[]) => {
    if (children && children.length) {
      let items = children.map((item: NavItem) => {
        return (
          <Link
            key={`child-item-link-${item.id}`}
            to={item.url}
            className="dropdown-item"
          >
            {item.name}
          </Link>
        );
      });
      return (
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {items}
        </div>
      );
    }
    return null;
  };

  // get nav items
  const getNavItems = (items: NavItem[]) => {
    let navItems = items.map((item: NavItem) => {
      let children = getChildItems(item.children);
      return (
        <li
          className={classNames(
            "nav-item",
            "px-2",
            { active: item.selected },
            { dropdown: item.children }
          )}
          key={`nav-item-${item.id}`}
        >
          <Link
            key={`nav-item-link-${item.id}`}
            // only add link if item has no children
            to={children ? "#" : item.url}
            className={classNames("nav-link", {
              // only add dropdown-toggle if item has child elements
              "dropdown-toggle": item.children,
            })}
            // only add data-toggle if item has child elements
            data-toggle={children ? "dropdown" : undefined}
          >
            {item.name}
          </Link>
          {children}
        </li>
      );
    });

    return navItems;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{getNavItems(props.items)}</ul>
      </div>
    </nav>
  );
};

export default Nav;
