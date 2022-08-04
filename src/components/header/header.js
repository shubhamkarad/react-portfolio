import React, { useContext, useState } from "react";
// import Mobile from './mobile/mobile';
import Web from "./web/web";
import "./header.css";
import ColorToggle from "../colorToggle/ColorToggle";
import profileImg from "../../assets/shubhProfile.jpg";
import { ThemeContext } from "../../App";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const colorTheme = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#home"></a>Shubham
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className={isOpen ? "sidenav-overlay" : ""}></div>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          <div className="mobile-color-toggle">
            <ColorToggle />
          </div>
          <div className={`mobile ${isOpen && "active"} ${colorTheme.theme}`}>
            <div className="close-menu" onClick={() => setIsOpen(!isOpen)}>
              X
            </div>
            <div className="profile-img">
              <img src={profileImg} alt="my profile" />
            </div>
            <div className="mobile-options">
              <div className="mobile-field">
                <a href="#project">
                  {/* <i class="fi fi-rr-briefcase field-icon"></i> */}
                  Projects
                </a>
              </div>
              <div className="mobile-field">
                <a href="#skills">
                  {/* <i class="fi fi-rr-laptop field-icon"></i> */}
                  Skills
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
          <div>
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
