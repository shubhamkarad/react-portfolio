import axios from "axios";
import React, { useState } from "react";
import Separator from "../../common/separator/separator";
import SocialContact from "../../common/socialContact/socialContact";
import "./contact.css";
function Contact(props) {
  const [successMsg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    messsage: "",
  });
  const { name, email, message } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/contact-me", user).then((res) => {
      setMsg(res.data.responseMessage);
      setErrorMsg(res.data.errorMessage);
    });
    // .catch(err => {
    //     setErrorMsg(err.data.responseMessage);
    //     console.log('error', err.data.responseMessage);
    // });
  };
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
                <i class="fi-rr-cloud-download download-icon" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <p className="form-heading">Let's talk</p>
          <p className={successMsg ? "success-msg" : ""}>{successMsg}</p>
          <p className={errorMsg ? "error-msg" : ""}>{errorMsg}</p>
          <form>
            <input
              type="text"
              className="input-name"
              placeholder="Enter your name.."
              name="name"
              onChange={onInputChange}
              value={name}
            />
            <input
              type="email"
              className="input-name"
              placeholder="Enter your email.."
              name="email"
              onChange={onInputChange}
              value={email}
            />
            <textarea
              className="input-comments"
              rows="4"
              cols="10"
              placeholder="Enter message here..."
              name="message"
              onChange={onInputChange}
              value={message}
            />
            <button type="submit" onClick={onSubmit} className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
