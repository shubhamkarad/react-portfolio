import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
import ColorToggle from "../../ColorToggle/ColorToggle";

import "./web.css";
function Web(props) {
  const colorTheme = useContext(ThemeContext);
  return (
    <div className="web">
      <div className={`web-field ${colorTheme.theme}`}>
        <a href="#about-me">
          {/* <i class="fi fi-rr-laptop field-icon"></i> */}
          About me
        </a>
      </div>
      <div className={`web-field ${colorTheme.theme}`}>
        <a href="#skills">
          {/* <i class="fi fi-rr-laptop field-icon"></i> */}
          Skills
        </a>
      </div>
      <div className={`web-field ${colorTheme.theme}`}>
        <a href="#project">
          {/* <i class="fi fi-rr-briefcase field-icon"></i> */}
          Projects
        </a>
      </div>
      <div className={`web-field ${colorTheme.theme}`}>
        <a href="#contacts">
          {/* <i class="fi fi-rr-envelope field-icon"></i> */}
          Contact me
        </a>
      </div>
      <div className="color-toggle">
        <ColorToggle />
      </div>
    </div>
  );
}

export default Web;
