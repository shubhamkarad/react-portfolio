import React, { useEffect, useState } from "react";
import "./scrollToTop.css";
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <i className="fa fa-angle-up"></i>
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;
