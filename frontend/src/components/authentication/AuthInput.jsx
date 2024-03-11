import React, { useEffect, useState } from 'react';
import classes from './AuthInput.module.css';

const MyInput = ({ label, icon, onIconClick, validationFunction, ...props }) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    if (validationFunction) {
      const validationResult = props.compareTo ? validationFunction(event.target.value, props.compareTo) : validationFunction(event.target.value);
      setIsValid(validationResult.isValid);
      setErrorMessage(validationResult.errorMessage);
    }
    if (props.onChange) props.onChange(event);
  };


	useEffect(() => {
		if (props.compareTo) {
      const validationResult = validationFunction(props.value, props.compareTo)
      setIsValid(validationResult.isValid);
      setErrorMessage(validationResult.errorMessage);
    }
		if(typeof props.setIsProblem === "function"){
			props.setIsProblem(prev => ({
				...prev,
				[props.name]: !isValid
			}));
		}
	}, [isValid, props.compareTo]);

  return (
    <div className={classes.inputContainer}>
      <input
        className={`${classes.myInput} ${!isValid ? classes.invalidInput : ''}`}
        {...props}
        onChange={handleChange}
        required
        placeholder=" "
      />
      <label className={classes.myLabel}>{label}</label>
      {icon && (
        <button onClick={onIconClick} className={classes.inputIcon} type="button">
          <img src={icon} alt="icon" />
        </button>
      )}
      {!isValid && <div className={classes.errorText}>{errorMessage}</div>}
    </div>
  );
};

export default MyInput;