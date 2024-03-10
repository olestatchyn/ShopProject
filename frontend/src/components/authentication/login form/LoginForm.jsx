import React, { useState, useRef } from 'react';
import classes from "./LoginForm.module.css"
import MyInput from '../CustomInputForAuthentication';
import MyButton from '../../UI/button/MyButton';

const LoginForm = () => {
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
          <h2>Ласкаво просимо назад!</h2>
        </div>
        <div>
          <h1>Вхід у ваш аккаунт</h1>
          <MyInput
            label="Електронна пошта"
            placeholder="Електронна пошта"
            name="email"
            type="email"
          />
          <MyInput
            label="Пароль"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Створіть пароль"
            icon="👁️"
            onIconClick={togglePasswordVisibility}
            ref={passwordRef}
          />
					<div>
						<input type="checkbox" />
						<p>Запам'ятати мене</p>
						<MyButton>Забули пароль?</MyButton>
					</div>
					<MyButton style={{background: "transparent"}}>Продовжити</MyButton>
					<div>
						<p>Новий користувач?</p>
						<MyButton style={{background: "transparent"}}>Зареєструйтесь тут!</MyButton>
					</div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
