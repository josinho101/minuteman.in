import React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap align-items-center">
        <img
          src="/contents/images/bulb.png"
          alt="Minute man"
          width="90"
          height="90"
        />
        <div>
          <a className="blog-header-logo text-dark header-title" href="/">
            Minute man
          </a>
          <div className="header-author">
            A technical blog by
            <span className="name">
              <b>&nbsp;Joseph J Emmatty</b>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
