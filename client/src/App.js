import { createContext, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Home from "./components/home/home";
import ScrollToTop from "./components/scroll/scrollToTop";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <Fragment>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
          modalIsShown,
          showModalHandler,
          hideModalHandler,
        }}
      >
        <div className={`app ${theme}`}>
          <Home />
          <ScrollToTop />
        </div>
      </ThemeContext.Provider>
    </Fragment>
  );
}

export default App;
