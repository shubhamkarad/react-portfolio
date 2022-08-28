import React from "react";
import profileImg from "../../assets/shubhProfile.jpg";
import Separator from "../common/separator/separator";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <section>
      <div className="about-me">
        <Separator />
        <label className="section-title">About Me</label>
        <div className="about-me-wrapper">
          <div className="about-me-img">
            <img src={profileImg} alt="My-cover" />
          </div>
          <div className="about-me-para">
            <h2>I'm Shubham</h2>
            <h4>Full Stack Developer</h4>
            <p>
              I am a Full Stack Developer based in Nashik, India. Completed my
              graduation in Bachelor of Engineering in Computer Science. Besides
              this I'm a photography enthusiast and passionate to capture the
              beauty I see in everything.
            </p>
            <p>
              <span className="tab-heading">Email: </span>
              shubhamkaradsdk07@gmail.com
            </p>
            <p>
              <span className="tab-heading">Phone: </span> 8378040439
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
