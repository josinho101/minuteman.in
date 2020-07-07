import React from "react";

interface Props {
  title: string;
  publishedAt: string;
  contentHTML: string;
}

const BlogPost: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="blog-post">
      <h3 className="blog-post-title">{props.title}</h3>
      <p className="blog-post-meta">{props.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: props.contentHTML }}></div>
    </div>
  );
};

export default BlogPost;
