import React from "react";
import Blog from "../blog/typings/blog";
import BlogPreview from "../blog/blogpreview";
import BlogNavigator from "../blog/blognavigator";
import BlogHelper from "../../helpers/bloghelper";

const Articles: React.FunctionComponent = () => {
  const blogs = BlogHelper.getAllBlogs();

  const getAllBlogs = (items: Blog[]) => {
    if (items) {
      let previewItems = items.slice(0, 7);
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
      <div className="col-md-8 blog-main">{getAllBlogs(blogs)}</div>
      <aside className="col-md-4 blog-sidebar">
        <BlogNavigator title="All posts" blogs={blogs} />
      </aside>
    </React.Fragment>
  );
};

export default Articles;
