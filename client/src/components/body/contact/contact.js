import React from "react";
import Separator from "../../common/separator/separator";
import SocialContact from "../../common/socialContact/socialContact";
import "./contact.css";
import ContactForm from "./contactForm";
function Contact(props) {
  return (
    <div className="contacts">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-form">
        <div className="contact-left">
          <p>Get in touch on below platforms</p>
          <div className="social-icons">
            <SocialContact />
          </div>
          <div className="contact-container">
            <div className="resume-download">
              <a
                href={require("../../../assets/resume.pdf")}
                download="Shubham resume.pdf"
              >
                <i className="fa fa-download download-icon" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
