import React from "react";
import SocialLinks from "./sociallinks";
import { Button } from "react-bootstrap";

const Contact: React.FunctionComponent = () => {
  const onSayHelloClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let location: any = window.location;
    location.href = "mailto:josinho.seven@gmail.com";
  };

  return (
    <div className="contact-wrapper">
      <h2>Get in touch with me</h2>
      <p>
        My inbox is always open. If you had any questions or just want to say
        hello, I am hear.
      </p>
      <p>I will try to get back to you asap.</p>
      <Button variant="outline-primary" size="lg" onClick={onSayHelloClick}>
        Say hello
      </Button>
      <div className="about-contact">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
