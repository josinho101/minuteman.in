import React from "react";
import Blog from "../blog/typings/blog";
import BlogPreview from "../blog/blogpreview";
import SocialLinks from "../contact/sociallinks"
import BlogNavigator from "../blog/blognavigator";
import BlogHelper from "../../helpers/bloghelper";

const Home: React.FunctionComponent = () => {
  const getAllBlogs = () => {
    let blogs = BlogHelper.getAllBlogs();

    if (blogs) {
      return blogs.map((blog: Blog) => {
        return <BlogPreview title={blog.title}
          publishedAt={blog.publishedAt}
          readMoreURL={blog.url}
          contentHTML={blog.descriptionHTML} />
      });
    }

    return null;
  }

  return (
    <React.Fragment>
      <div className="col-md-8 blog-main">
        <h3 className="pb-4 mb-4 font-italic border-bottom">
          Recent posts
        </h3>
        {getAllBlogs()}
      </div>
      <aside className="col-md-4 blog-sidebar">
        <div className="p-4 mb-3 bg-light rounded right-improvement">
          <img src="/contents/images/too-busy.png" />
          <span className="p-1">
            <b><em>!important, dont't ignore</em></b>
          </span>
        </div>
        <div className="p-4 mb-3 bg-light rounded right-improvement">
          <SocialLinks />
        </div>
        <BlogNavigator />
      </aside>
    </React.Fragment>);
};

export default Home;
