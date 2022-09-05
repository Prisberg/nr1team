import React from "react";
import { ContactForm } from "./ContactForm";
import "./contact.css";
import greetingimg from "../../../assets/images/greeting-background.svg";
function Contact() {
  return (
    <div className="">
          <img
    src={greetingimg}
    alt="greeting"
    style={{
      height: "800px",
      width: "100%",
      objectFit: "cover",
      position: "absolute",
      top: "1px",
      zIndex: "-1",
      "@media (max-width: 450px)": {
        height: "500px",
      },
      "@media (max-width: 360px)": {
        height: "400px",
      },
    }}
  />
      <div className="contact-main">
      <h1 className="contact-title">Contact us</h1>
      <div className="contact-bg">
        <ContactForm/>
      </div>
    </div>
    </div>
  );
}

export default Contact;
