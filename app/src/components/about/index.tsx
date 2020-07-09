import React from "react";
import SocialLinks from "../contact/sociallinks";

const authorPng = require("../../assets/images/jj.jpg");

const About: React.FunctionComponent = () => {
  const getExperienceInYears = () => {
    let start: any = new Date("2012-03-02");
    let end: any = new Date();
    let diffDate: any = new Date(end - start);

    /*let exp = ` ${diffDate.toISOString().slice(0, 4) - 1970} years and ${
      diffDate.getMonth() + 1
    } months `;*/

    let exp = ` ${diffDate.toISOString().slice(0, 4) - 1970}`;

    return exp;
  };

  return (
    <React.Fragment>
      <div className="col-md-8 blog-main">
        <div className="blog-post">
          <p>
            <span className="p-start">H</span>ello! I'm Joseph J Emmatty, from
            India, with over <b>{getExperienceInYears()} years</b> of experience
            in software design and development. While I'm a proficient
            full-stack developer, my expertise includes building scalable
            backend services (API) and front-end single page applications.
          </p>
          <p>
            Problems are fun to tackle, and I'm most interested in solving
            architectural and performance-based problems, which will make
            customers happy. With every problem solving I will get chance to
            face new challenges and there by learning new things and improving
            myself as a software engineer.
          </p>
          <p>Here are some technologies I've been working recently:</p>
          <b>
            <ul>
              <li>React JS, JavaScript/TypeScript</li>
              <li>C#, .net core, ASP.Net MVC, Web API</li>
            </ul>
          </b>
          <p>
            Some of my personal projects added in 'projects' section and others
            in my
            <a href="https://github.com/josinho101" target="_blank">
              {" "}
              github{" "}
            </a>
            profile.
          </p>
          <p>
            <em>My personal interests include:</em>
          </p>
          <ul>
            <li>
              <b>Machine learning</b>: Just started and working through online
              videos and tutorials. I found it very exciting as it will make
              machines learn from its experience.
            </li>
            <li>
              <b>DIY projects</b>: It's fun to make things, I spend my free time
              troubleshooting electrical and electronic gadgets and Arduino
              board, it's fun working with it as I can program and control
              hardware, which feels like my programs had come to life.
            </li>
            <li>
              <b>Football</b>: A football lover and a big fan of FC Barcelona.
            </li>
          </ul>
          <div className="about-contact">
            <SocialLinks />
          </div>
        </div>
      </div>
      <aside className="col-md-4 blog-sidebar">
        <div className="p-4 mb-3 bg-light rounded right-improvement">
          <img
            src={authorPng}
            title="Joseph J Emmatty"
            alt={"Author - Joseph J Emmatty"}
          />
        </div>
      </aside>
    </React.Fragment>
  );
};

export default About;
