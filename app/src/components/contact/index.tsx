import React from "react";
import { Button } from "react-bootstrap";

const Contact: React.FunctionComponent = () => {
  return (
    <div className="contact-wrapper">
      <h2>Get in touch with me</h2>
      <p>
        My inbox is always open. If you had any questions or just want to say
        hello, I am hear.
      </p>
      <p>I will try to get back to you asap.</p>
      <Button variant="outline-primary" size="lg">
        Say hello
      </Button>
      <div className="about-contact">
        <ul className="social-icons">
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
