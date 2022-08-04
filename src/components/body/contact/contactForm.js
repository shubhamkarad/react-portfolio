import React, { useState } from "react";
import axios from "axios";
import useInput from "../../../hooks/use-input";
import "./contactForm.css";
const ContactForm = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    onValueChangeHandler: nameChangeHandler,
    onValueBlurHandler: nameBlurHandler,
    reset: resetNameHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    onValueChangeHandler: emailChangeHandler,
    onValueBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredMessage,
    hasError: messageInputHasError,
    isValid: messageIsValid,
    onValueChangeHandler: messageChangeHandler,
    onValueBlurHandler: messageBlurHandler,
    reset: resetMessageHandler,
  } = useInput((value) => value.trim() !== "");
  const user = {
    name: enteredName,
    email: enteredEmail,
    message: enteredMessage,
  };
  const [successMsg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let formIsValid = false;
  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!nameIsValid) {
      return;
    }
    await axios
      .post("http://localhost:4000/contact-me", user)
      .then((res) => {
        setMsg(res.data.responseMessage);
        setErrorMsg(res.data.errorMessage);
      })
      .catch((err) => {
        setErrorMsg(err.data.responseMessage);
        console.log("error", err.data.responseMessage);
      });
    console.log(enteredName, enteredEmail);
    resetNameHandler();
    resetEmailHandler();
    resetMessageHandler();
  };
  const emailClass = emailInputHasError
    ? "input-name form-invalid"
    : "input-name";
  const nameClass = nameInputHasError
    ? "input-name form-invalid"
    : "input-name";
  return (
    <React.Fragment>
      <div className="contact-form-wrapper">
        {/* <p className="form-heading">Let's talk</p> */}
        <p className={successMsg ? "success-msg" : ""}>{successMsg}</p>
        <p className={errorMsg ? "error-msg" : ""}>{errorMsg}</p>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className={nameClass}
            placeholder="Enter your name.."
            name="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-msg">Please enter correct Name</p>
          )}
          <input
            type="email"
            className={emailClass}
            placeholder="Enter your email.."
            name="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="error-msg">please enter correct email</p>
          )}
          <textarea
            className="input-comments"
            rows="4"
            cols="10"
            placeholder="Enter message here..."
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            name="message"
            // onChange={onInputChange}
            // value={message}
          />
          {messageInputHasError && (
            <p className="error-msg">please enter something</p>
          )}
          <button type="submit" disabled={!formIsValid} className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
export default ContactForm;
