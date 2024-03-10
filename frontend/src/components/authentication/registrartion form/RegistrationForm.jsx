import React, { useState, useRef } from 'react';
import classes from "./RegistrationForm.module.css"
import MyInput from '../CustomInputForAuthentication';
import MyButton from '../../UI/button/MyButton';
import eyeIcon from './../../../source/eye.svg';
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
        <div className={classes.input__box__header}>
          <h1>Реєстрація</h1>
          <h2>Давайте розпочнемо!</h2>
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
          />
          <MyInput
            label="Створіть пароль"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Створіть пароль"
            icon={eyeIcon}
            onIconClick={togglePasswordVisibility}
            ref={passwordRef}
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
						<MyButton class={classes.alredylogin__link} style={{background: "transparent"}}>ЗАЛОГІНЬТЕСЬ ТУТ!</MyButton>
					</div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
