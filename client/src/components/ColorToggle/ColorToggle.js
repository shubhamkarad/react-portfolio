import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./ColorToggle.css";
const ColorToggle = () => {
  const colorTheme = useContext(ThemeContext);
  return (
    <div className="toggle-switch">
      <label className="colorTheme">
        <input
          className="colorPalette"
          type="checkbox"
          onClick={colorTheme.toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
export default ColorToggle;
