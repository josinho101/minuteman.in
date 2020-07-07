import React from "react";
import Blog from "../blog/typings/blog";
import BlogPreview from "../blog/blogpreview";
import SocialLinks from "../contact/sociallinks";
import BlogNavigator from "../blog/blognavigator";
import BlogHelper from "../../helpers/bloghelper";

const Home: React.FunctionComponent = () => {
  const blogs = BlogHelper.getAllBlogs();

  const getAllBlogs = (items: Blog[]) => {
    if (items) {
      // get first three items
      let previewItems = items.slice(0, 3);
      return previewItems.map((blog: Blog, index: number) => {
        return (
          <BlogPreview
            key={`blog-preview-${index}`}
            title={blog.title}
            publishedAt={blog.publishedAt}
            readMoreURL={blog.url}
            contentHTML={blog.descriptionHTML}
          />
        );
      });
    }

    return null;
  };

  return (
    <React.Fragment>
      <div className="col-md-8 blog-main">
        <h3 className="pb-4 mb-4 font-italic border-bottom">Recent posts</h3>
        {getAllBlogs(blogs)}
      </div>
      <aside className="col-md-4 blog-sidebar">
        <div className="p-4 mb-3 bg-light rounded right-improvement">
          <div>
            <img src="/contents/images/too-busy.png" />
          </div>
          <span className="p-1">
            <b>
              <em>!important, dont't ignore</em>
            </b>
          </span>
        </div>
        <div className="p-4 mb-3 bg-light rounded right-improvement">
          <SocialLinks />
        </div>
        <BlogNavigator title="Older posts" blogs={blogs} />
      </aside>
    </React.Fragment>
  );
};

export default Home;
