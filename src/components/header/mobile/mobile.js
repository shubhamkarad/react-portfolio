import React, { useContext } from "react";
import "./mobile.css";
import profileImg from "../../../assets/shubhProfile.jpg";
import { ThemeContext } from "../../../App";
function Mobile({ isOpen, setIsOpen }) {
  const colorTheme = useContext(ThemeContext);
  return (
    <div className={`mobile ${colorTheme.theme} ${isOpen && "active"}`}>
      <div className="close-menu" onClick={() => setIsOpen(!isOpen)}>
        X
      </div>
      <div className="profile-img">
        <img src={profileImg} alt="my profile" />
      </div>
      <div className="mobile-options">
        <div className="mobile-field">
          <a href="#about-me">
            {/* <i class="fi fi-rr-laptop field-icon"></i> */}
            About me
          </a>
        </div>
        <div className="mobile-field">
          <a href="#skills">
            {/* <i class="fi fi-rr-laptop field-icon"></i> */}
            Skills
          </a>
        </div>
        <div className="mobile-field">
          <a href="#project">
            {/* <i class="fi fi-rr-briefcase field-icon"></i> */}
            Projects
          </a>
        </div>
        <div className="mobile-field">
          <a href="#contacts">
            {/* <i class="fi fi-rr-envelope field-icon"></i> */}
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
