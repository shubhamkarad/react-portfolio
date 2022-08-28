import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && isTouched;

  const onValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const onValueBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    hasError,
    isValid: enteredValueIsValid,
    onValueChangeHandler,
    onValueBlurHandler,
    reset,
  };
};
export default useInput;
