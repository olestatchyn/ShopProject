import React, { useState } from 'react';
import classes from './CustomInputForAuthentication.module.css'; 

const MyInput = React.forwardRef(({ label, icon, onIconClick, validationFunction, ...props }, ref) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    if (validationFunction) {
      const validationResult = validationFunction(event.target.value);
      setIsValid(validationResult.isValid);
      setErrorMessage(validationResult.errorMessage);
    }
    if (props.onChange) props.onChange(event); 
  };

  return (
		< >
    <div className={classes.inputContainer}>
      <input
        ref={ref}
        className={`${classes.myInput} ${!isValid ? classes.invalidInput : ''}`}
        {...props}
        onChange={handleChange}
        required
        placeholder=" "
      />
      <label className={classes.myLabel}>{label}</label>
      {icon && (
        <button onClick={onIconClick} className={!isValid ? classes.inputIcon : classes.inputIcon} type="button">
          <img src={icon} alt="icon" />
        </button>
      )}
		{!isValid && <div className={classes.errorText}>{errorMessage}</div>}
    </div>
		</>
  );
});


export default MyInput;
