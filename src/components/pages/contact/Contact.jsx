import React from "react";
import { ContactForm } from "./ContactForm";
import "./contact.css";
function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-bg">
        <h1 className="contact-title">Contact us</h1>
        <ContactForm/>
      </div>
    </div>
  );
}

export default Contact;
