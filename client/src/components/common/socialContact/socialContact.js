import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
import { SocialData } from "../../data/social";
import "./socialContact.css";
function SocialContact(props) {
  const colorTheme = useContext(ThemeContext);
  const data = SocialData;
  return (
    <div className="social-contacts">
      {data.map((item) => {
        return (
          <a
            key={item.id}
            href={item.link}
            className={`social-field ${colorTheme.theme}`}
          >
            <div className="social-icon">
              <i className={item.icon}></i>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
