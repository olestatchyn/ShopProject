import React, { useState} from 'react';
import classes from "./LoginForm.module.css"
import MyInput from '../AuthInput';
import MyButton from '../../UI/button/MyButton';
import eyeIconBlocked from "../../../source/eye-blocked.svg";
import eyeIcon from "../../../source/eye-open.svg";
import cross from './../../../source/cross.svg';
import { validateEmail} from './../../../utils/validation';


const LoginForm = ({setVisibleReg, setVisibleLog}) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

	const [formData, setFormData] = useState({
		email: '', 
		password: '', 
	});

	const updateFormData = (field, value) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}));
	};

	const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleLog(false);
    setVisibleReg(true);
  };

	const allFieldsFilled = () => {
		return formData.email && formData.password
	};

	const logAccount = () => {
		const checkEmail = validateEmail(formData.email)
		if (allFieldsFilled() && checkEmail.isValid) {
			// кидаємо на бек
			console.log('Всі умови виконані');
		}  
	}
	

  return (
    <div className={classes.input__box}>
      <div>
        <div className={classes.input__box__header}>
          <h1>Вхід</h1>
          <h2>Ласкаво просимо назад!</h2>
          <MyButton
            style={{ background: "transparent", cursor: "default" }}
            onClick={() => setVisibleLog(false)}
          >
            <img src={cross} alt="" className={classes.cross} />
          </MyButton>
        </div>
        <div>
          <h1 className={classes.input__box__label}>Вхід у ваш аккаунт</h1>
          <MyInput
            label="Електронна пошта"
            placeholder="Електронна пошта"
            name="email"
            type="email"
						value={formData.email}
						onChange={(e)=>updateFormData('email', e.target.value)}
						validationFunction={validateEmail}
          />
           <MyInput
						name="password"
						label="Пароль"
						type={isPasswordVisible ? 'text' : 'password'}
						placeholder="Пароль"
						icon={isPasswordVisible ? eyeIconBlocked : eyeIcon}
						onIconClick={togglePasswordVisibility}
						value={formData.password}
						onChange={(e)=>updateFormData('password', e.target.value)}
					/>
					<div className={classes.input__box__addition}>
					  <div className={classes.input__box__stay}>
             	<label className={classes.customcheckbox}>
               	<input type="checkbox" id="remember-me"/>
               	<span className={classes.checkmark}></span>
               	Запам'ятати мене
              </label>
            </div>
            <div>
              <MyButton className={classes.input__box__forget}>
                Забули пароль?
              </MyButton>
            </div>
          </div>

					<MyButton style={{background: "transparent"}}>
						<div 
							className={classes.login}
							onClick={logAccount}>
								Продовжити
						</div>
          </MyButton>
          <div className={classes.notregistered}>
            Новий користувач?&nbsp;
            <MyButton
              className={classes.notregistered__link}
              style={{ background: "transparent" }}
              onClick={handleSubmit}
            >
              Зареєструйтесь тут!
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
