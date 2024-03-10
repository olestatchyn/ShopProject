import React, { useState, useRef } from 'react';
import classes from "./RegistrationForm.module.css"
import MyInput from './CustomInput';
import MyButton from '../UI/button/MyButton';

const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passwordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
    if(passwordRef.current) {
      passwordRef.current.type = isPasswordVisible ? 'text' : 'password';
    }
  };

  return (
    <div className={classes.input__box}>
      <div>
        <div>
          <h1>Вхід</h1>
          <h2>Давайте розпочнемо!</h2>
        </div>
        <div>
          <h1>Створити аккаунт</h1>
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
          />
          <MyInput
            label="Створіть пароль"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Створіть пароль"
            icon="👁️"
            onIconClick={togglePasswordVisibility}
            ref={passwordRef}
          />
          <MyInput
            label="Підтвердіть пароль"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Створіть пароль"
            icon="👁️"
            onIconClick={togglePasswordVisibility}
            ref={passwordRef}
          />
					<MyButton style={{background: "transparent"}}>Почати</MyButton>
					<div>
						<p>Уже маєте аккаунт?</p>
						<MyButton style={{background: "transparent"}}>ЗАЛОГІНЬТЕСЬ ТУТ!</MyButton>
					</div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
