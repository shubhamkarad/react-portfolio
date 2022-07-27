import { createContext, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Home from "./components/home/home";
import ScrollToTop from "./components/scroll/scrollToTop";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <Fragment>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`app ${theme}`}>
          <Home />
          <ScrollToTop />
        </div>
      </ThemeContext.Provider>
    </Fragment>
  );
}

export default App;
