import React from "react";
import { FormControl, Input, Button } from "@mui/material";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-bg">
      <h1 className="contact-title">
        Contact us
      </h1>
      <FormControl>
          <Input id="contact-input1" aria-describedby="my-helper-text" className="contact-input" disableUnderline/>
        <Input id="contact-input2" aria-describedby="my-helper-text" className="contact-input" disableUnderline/>
        <Input id="contact-input3" aria-describedby="my-helper-text" className="contact-input" disableUnderline/>
      </FormControl>
      <div className="button-wrapper">
      <Button variant="contained" className="contact">Send</Button>
      </div>
      </div>
    </div>
  );
}

export default Contact;
