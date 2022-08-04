import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../../App";
import "./modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={onclose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const colorTheme = useContext(ThemeContext);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={colorTheme.hideModalHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
