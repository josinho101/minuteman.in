import React from "react";
import SocialLinks from "../contact/sociallinks";

const About: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="col-md-8 blog-main">
        <div className="blog-post">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="about-contact">
            <SocialLinks />
          </div>
        </div>
      </div>
      <aside className="col-md-4 blog-sidebar">
        <div className="p-4 mb-3 bg-light rounded right-improvement">
          <img
            src="/contents/images/jj.jpg"
            title="Joseph J Emmatty"
            alt={"Author - Joseph J Emmatty"}
          />
        </div>
      </aside>
    </React.Fragment>
  );
};

export default About;
