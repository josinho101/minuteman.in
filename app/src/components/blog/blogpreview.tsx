import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  publishedAt: string;
  contentHTML: string;
  readMoreURL: string;
}

const BlogPreview: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="blog-post">
      <h3 className="blog-post-title">{props.title}</h3>
      <p className="blog-post-meta">{props.publishedAt}</p>
      <div
        className="blog-preview-wrapper"
        dangerouslySetInnerHTML={{ __html: props.contentHTML }}
      ></div>
      <div className="blog-preview-footer">
        <Link to={`/articles/${props.readMoreURL}`}>Continue reading...</Link>
      </div>
    </div>
  );
};

export default BlogPreview;
