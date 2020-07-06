import React from "react";
import BlogPreview from "../blog/blogpreview";
import SocialLinks from "../contact/sociallinks"
import BlogNavigator from "../blog/blognavigator";

const Home: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="col-md-8 blog-main">
        <h3 className="pb-4 mb-4 font-italic border-bottom">
          Recent posts
        </h3>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
      <aside className="col-md-4 blog-sidebar">
        <div className="p-4 mb-3 bg-light rounded right-improvement">
          <img src="/contents//images/too-busy.png" />
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
