import React, { useState, useRef } from 'react';
import classes from "./LoginForm.module.css"
import MyInput from '../CustomInputForAuthentication';
import MyButton from '../../UI/button/MyButton';
import eyeIcon from "../../../source/eye.svg";

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
        <div className={classes.input__box__header}>
          <h1>Вхід</h1>
          <h2>Ласкаво просимо назад!</h2>
        </div>
        <div>
          <h1 className={classes.input__box__label}>Вхід у ваш аккаунт</h1>
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
            icon={eyeIcon}
            onIconClick={togglePasswordVisibility}
            ref={passwordRef}
          />
					<div className={classes.input__box__addition}>
					    <div className={classes.input__box__stay}>
                            <label className={classes.customcheckbox}>
                                <input type="checkbox" id="remember-me"/>
                                <span className={classes.checkmark}></span>
                                Запам'ятати мене
                            </label>
                        </div>
                        <div >
						    <MyButton className={classes.input__box__forget}>Забули пароль?</MyButton>
                        </div>
					</div>

					<MyButton style={{background: "transparent"}}>
                        <div className={classes.login}>
                            Продовжити
                        </div>
                    </MyButton>
					<div className={classes.notregistered}>
						Новий користувач?&nbsp;
						<MyButton class={classes.notregistered__link} style={{background: "transparent"}}>Зареєструйтесь тут!</MyButton>
					</div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
