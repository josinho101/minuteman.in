import React from "react";
import classNames from "classnames";
import NavItem from "./typings/navitem";

interface Props {
  items: NavItem[];
}

const Nav: React.FunctionComponent<Props> = (props) => {
  // get child nav items
  const getChildItems = (children: NavItem[]) => {
    if (children && children.length) {
      let items = children.map((item: NavItem) => {
        return (
          <a
            className="dropdown-item"
            href={item.url}
            key={`child-item-${item.id}`}
          >
            {item.name}
          </a>
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
    return items.map((item: NavItem) => {
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
          <a
            className={classNames("nav-link", {
              // only add dropdown-toggle if item has child elements
              "dropdown-toggle": item.children,
            })}
            // only add data-toggle if item has child elements
            data-toggle={children ? "dropdown" : undefined}
            // only add href if item has no child elements
            href={children ? "#" : item.url}
          >
            {item.name}
          </a>
          {children}
        </li>
      );
    });
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
