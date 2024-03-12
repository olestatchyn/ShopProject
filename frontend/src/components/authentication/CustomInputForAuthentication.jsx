import React, { useEffect, useState } from "react";
import classes from "./CustomInputForAuthentication.module.css";

const MyInput = ({
  label,
  icon,
  onIconClick,
  validationFunction,
  ...props
}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    if (validationFunction) {
      const validationResult = props.compareTo
        ? validationFunction(event.target.value, props.compareTo)
        : validationFunction(event.target.value);
      setIsValid(validationResult.isValid);
      setErrorMessage(validationResult.errorMessage);
    }
    if (props.onChange) props.onChange(event);
  };

  useEffect(() => {
    if (props.compareTo) {
      const validationResult = validationFunction(props.value, props.compareTo);
      setIsValid(validationResult.isValid);
      setErrorMessage(validationResult.errorMessage);
    }
    if (typeof props.setIsProblem === "function") {
      props.setIsProblem((prev) => ({
        ...prev,
        [props.name]: !isValid,
      }));
    }
  }, [isValid, props.compareTo]);

  return (
    <div className={classes.inputContainer}>
      <div className={classes.label__div}>
        <input
          className={`${classes.myInput} ${classes.input__animation} ${
            !isValid ? classes.invalidInput : ""
          }`}
          {...props}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <span className={classes.inputLabel}>{label}</span>
      </div>
      {/* <label className={classes.myLabel}>{label}</label> */}
      {icon && (
        <button
          onClick={onIconClick}
          className={classes.inputIcon}
          onMouseDown={(e) => e.preventDefault()}
          type="button"
        >
          <img src={icon} alt="icon" />
        </button>
      )}
      {!isValid && <div className={classes.errorText}>{errorMessage}</div>}
    </div>
  );
};

export default MyInput;
