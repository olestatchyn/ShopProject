import React from 'react';
import classes from './CustomInputForAuthentication.module.css'; // Упевніться, що шлях до файлу CSS вірний

const MyInput = React.forwardRef(({ label, icon, onIconClick, ...props }, ref) => {
  return (
    <div className={classes.inputContainer}>
      <input
        ref={ref}
        className={classes.myInput}
        {...props}
        required
        placeholder=" "
      />
      <label className={classes.myLabel}>{label}</label>
      {icon && (
        <button onClick={onIconClick} className={classes.inputIcon} type="button">
          {icon}
        </button>
      )}
    </div>
  );
});

export default MyInput;
