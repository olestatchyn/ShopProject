import React, { useEffect, useState } from 'react';
import classes from './AuthInput.module.css';

const MyInput = ({
  label,
  icon,
  onIconClick,
  validationFunction,
	placeholder,
	setIsProblem,
	compareTo,
  ...props
}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    if (validationFunction) {
      const validationResult = compareTo
        ? validationFunction(event.target.value, compareTo)
        : validationFunction(event.target.value);
      setIsValid(validationResult.isValid);
      setErrorMessage(validationResult.errorMessage);
    }
    if (props.onChange) props.onChange(event);
  };

  useEffect(() => {
    if (compareTo) {
      const validationResult = validationFunction(props.value, compareTo);
      setIsValid(validationResult.isValid);
      setErrorMessage(validationResult.errorMessage);
    }
    if (typeof setIsProblem === "function") {
      setIsProblem((prev) => ({
        ...prev,
        [props.name]: !isValid,
      }));
    }
  }, [isValid, compareTo]);

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
          onFocus={(e) => {
            e.target.setAttribute("autocomplete", "off");
          }}
        />
        <span className={classes.inputLabel}>{label}</span>
      </div>
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
