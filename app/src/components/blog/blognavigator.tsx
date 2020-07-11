import React from "react";
import Blog from "./typings/blog";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  blogs: Blog[];
}

const BlogNavigator: React.FunctionComponent<Props> = (props) => {
  const onDateClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    let target: any = event.target;
    target.classList.toggle("caret-down");
    let parent = target.parentElement;
    if (parent) {
      let ul = parent.getElementsByClassName("nested")[0];
      if (ul) {
        ul.classList.toggle("active");
      }
    }
  };

  const groupBlogsByDate = (blogs: Blog[]) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // group blogs and create an object
    const groups = blogs.reduce((groups: any, blog: Blog) => {
      let date = new Date(Date.parse(blog.publishedAt));
      let month = months[date.getMonth()];
      let year = date.getFullYear();
      let key = `${month} ${year}`;

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(blog);

      return groups;
    }, {});

    return groups;
  };

  const generateBlogNav = (blogs: Blog[]) => {
    let groups = groupBlogsByDate(blogs);
    // iterate group object and create components
    let components = Object.keys(groups).map((item: any, index: number) => {
      return (
        <li key={`blog-group-${index}`}>
          <span
            className={classNames("caret", {
              "caret-down": index === 0,
            })}
            onClick={onDateClick}
          >
            {item}
          </span>
          <ul
            className={classNames("nested", {
              active: index === 0,
            })}
          >
            {groups[item].map((blog: Blog, itemIndex: number) => {
              return (
                <li key={`blog-group-item-${itemIndex}`}>
                  <Link to={`/articles/${blog.url}`}>{blog.title}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });

    return components;
  };

  return (
    <React.Fragment>
      <hr />
      <h4 className="font-italic blog-nav-title">{props.title}</h4>
      <ul className="tree-view">{generateBlogNav(props.blogs)}</ul>
      <hr />
    </React.Fragment>
  );
};

export default BlogNavigator;
