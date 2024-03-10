import React, { useState, useRef } from 'react';
import classes from "./RegistrationForm.module.css"
import MyInput from '../CustomInputForAuthentication';
import MyButton from '../../UI/button/MyButton';
import eyeIcon from './../../../source/eye.svg';
import cross from './../../../source/cross.svg';

const RegistrationForm = ({setVisibleReg, setVisibleLog}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passwordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
    if(passwordRef.current) {
      passwordRef.current.type = isPasswordVisible ? 'text' : 'password';
    }
  };

	const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleReg(false);
    setVisibleLog(true);
  };
  return (
    <div className={classes.input__box}>
      <div>
        <div className={classes.input__box__header}>
          <h1>Реєстрація</h1>
          <h2>Давайте розпочнемо!</h2>
					<MyButton style={{background: "transparent", cursor: "default"}} onClick={()=>setVisibleReg(false)}>
						<img src={cross} alt="" className={classes.cross} />
					</MyButton>
        </div>
        <div>
          <div className={classes.input__box__label}>Створити аккаунт</div>
          <MyInput
            label="Ваше ім'я"
            placeholder="Ваше ім'я"
            name="name"
          />
          <MyInput
            label="Електронна пошта"
            placeholder="Електронна пошта"
            name="email"
            type="email"
						validationFunction={validateEmail}
          />
          <MyInput
            label="Створіть пароль"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Створіть пароль"
            icon={eyeIcon}
            onIconClick={togglePasswordVisibility}
            ref={passwordRef}
						validationFunction={validatePassword}
          />
          <MyInput
            label="Підтвердіть пароль"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Створіть пароль"
            icon={eyeIcon}
            onIconClick={togglePasswordVisibility}
            ref={passwordRef}
          />
					<MyButton style={{background: "transparent"}}>
            <div className={classes.registration}>
            	Почати
            </div>
          </MyButton>
					<div className={classes.alreadylogin} >
						Уже маєте аккаунт?&nbsp;
						<MyButton 
							className={classes.alredylogin__link}  
							style={{background: "transparent"}}
							onClick={handleSubmit}
						>ЗАЛОГІНЬТЕСЬ ТУТ!</MyButton>
					</div>
        </div>
      </div>
    </div>
  );
}

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || regex.test(email)) {
    return { isValid: true, errorMessage: '' };
  } else {
    return { isValid: false, errorMessage: 'Введіть коректну пошту' };
  }
};

function validatePassword(password) {
  const hasLatinLetters = /[a-zA-Z]/.test(password); 
  const hasMinimumLength = password.length >= 6; 
  const hasDigits = /\d/.test(password); 
  const hasUpperCaseLetters = /[A-Z]/.test(password); 

  if (hasLatinLetters && hasMinimumLength && hasDigits && hasUpperCaseLetters) {
    return { isValid: true, errorMessage: '' };
  } else {
    return { 
      isValid: false, 
      errorMessage: 'Пароль має містити тільки латинські літери, бути не менше 6 символів, містити цифри та великі літери.' 
    };
  }
}


export default RegistrationForm;