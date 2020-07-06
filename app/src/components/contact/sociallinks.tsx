import React from "react";

const SocialLinks: React.FunctionComponent = () => {
  return (
    <ul className="social-icons">
      <li>
        <a
          target="_blank"
          className="social-icon"
          href="https://github.com/josinho101"
        >
          <i className="fa fa-github"></i>
        </a>
      </li>
      <li>
        <a href="" className="social-icon">
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          className="social-icon"
          href="https://www.facebook.com/josinho.joseph"
        >
          <i className="fa fa-facebook"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
