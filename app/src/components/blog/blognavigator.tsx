import React from "react";
import Blog from "./typings/blog";
import { group } from "console";

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

    console.log(groups);
  };

  groupBlogsByDate(props.blogs);

  return (
    <React.Fragment>
      <h4 className="font-italic">{props.title}</h4>
      <ul className="tree-view">
        <li>
          <span className="caret caret-down" onClick={onDateClick}>
            July 2020 (2)
          </span>
          <ul className="nested active">
            <li>
              <a href="#">
                A very long blog post title to check if it breaks or not.
              </a>
            </li>
            <li>
              <a href="#">Blob post 2</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="caret" onClick={onDateClick}>
            June 2020 (0)
          </span>
        </li>
        <li>
          <span className="caret" onClick={onDateClick}>
            May 2020 (4)
          </span>
          <ul className="nested">
            <li>
              <a href="#">Blob post 1</a>
            </li>
            <li>
              <a href="#">Blob post 2</a>
            </li>
            <li>
              <a href="#">Blob post 3</a>
            </li>
            <li>
              <a href="#">Blob post 4</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="caret" onClick={onDateClick}>
            April 2020 (5)
          </span>
          <ul className="nested">
            <li>
              <a href="#">Blob post 1</a>
            </li>
            <li>
              <a href="#">Blob post 2</a>
            </li>
            <li>
              <a href="#">Blob post 3</a>
            </li>
            <li>
              <a href="#">Blob post 4</a>
            </li>
            <li>
              <a href="#">Blob post 5</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="caret" onClick={onDateClick}>
            March 2020 (3)
          </span>
          <ul className="nested">
            <li>
              <a href="#">Blob post 1</a>
            </li>
            <li>
              <a href="#">Blob post 2</a>
            </li>
            <li>
              <a href="#">Blob post 3</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="caret" onClick={onDateClick}>
            February 2020 (3)
          </span>
          <ul className="nested">
            <li>
              <a href="#">Blob post 1</a>
            </li>
            <li>
              <a href="#">Blob post 2</a>
            </li>
            <li>
              <a href="#">Blob post 3</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="caret" onClick={onDateClick}>
            January 2020 (1)
          </span>
          <ul className="nested">
            <li>
              <a href="#">Blob post 1</a>
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default BlogNavigator;
