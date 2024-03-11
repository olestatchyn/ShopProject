import React, {useState} from 'react';
import classes from "./RegistrationForm.module.css"
import MyInput from '../CustomInputForAuthentication';
import MyButton from '../../UI/button/MyButton';
import eyeIcon from './../../../source/eye.svg';
import cross from './../../../source/cross.svg';

const RegistrationForm = ({setVisibleReg, setVisibleLog}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isProblem, setIsProblem] = useState({
		name: true, 
		email: true, 
		password: true, 
		confirmPassword: true,
	});
	const [formData, setFormData] = useState({
		name: '', 
		email: '', 
		password: '', 
		confirmPassword: ''
	});
	
	const updateFormData = (field, value) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}));
	};
	
	const allFieldsFilled = () => {
		return formData.name && formData.email && formData.password && formData.confirmPassword;
	};

	const allFieldsValid = () => {
		return Object.values(isProblem).every(value => value === false);
	};

	const regAccount = () => {
		if (allFieldsFilled() && allFieldsValid()) {
			// кидаємо на бек
			console.log('Всі умови виконані');
		}  
	}

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
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
					<MyButton 
						style={{background: "transparent", cursor: "default"}} 
						onClick={()=>(setVisibleReg(false))}>
						<img src={cross} alt="" className={classes.cross} />
					</MyButton>
        </div>
        <div style={{position: "relative"}}>
          <div className={classes.input__box__label}>Створити аккаунт</div>
          <MyInput
            label="Ваше ім'я"
            placeholder="Ваше ім'я"
            name="name"
						value={formData.name}
						onChange={(e)=>updateFormData('name', e.target.value)}
						setIsProblem={setIsProblem}
						validationFunction={validateName}
          />
          <MyInput
            label="Електронна пошта"
            placeholder="Електронна пошта"
            name="email"
            type="email"
						value={formData.email}
						onChange={(e)=>updateFormData('email', e.target.value)}
						setIsProblem={setIsProblem}
						validationFunction={validateEmail}
          />
          <MyInput
						name="password"
						label="Створіть пароль"
						type={isPasswordVisible ? 'text' : 'password'}
						placeholder="Створіть пароль"
						icon={eyeIcon}
						onIconClick={togglePasswordVisibility}
						value={formData.password}
						onChange={(e)=>updateFormData('password', e.target.value)}
						setIsProblem={setIsProblem}
						validationFunction={validatePassword}
					/>
					<MyInput
						label="Підтвердіть пароль"
						name="confirmPassword"
						type={isPasswordVisible ? 'text' : 'password'}
						placeholder="Підтвердіть пароль"
						icon={eyeIcon}
						onIconClick={togglePasswordVisibility}
						value={formData.confirmPassword}
						setIsProblem={setIsProblem}
						onChange={(e)=>updateFormData('confirmPassword', e.target.value)}
						validationFunction={validateConfirmPassword}
						compareTo={formData.password}
					/>
					<MyButton 
						style={{background: "transparent"}}
						onClick={regAccount}
					>
            <div className={classes.registration}>
            	Почати
            </div>
          </MyButton>
					<div className={classes.alreadylogin} >
						Уже маєте аккаунт?&nbsp;
						<MyButton 
							className={classes.alreadylogin__link}
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
  const hasMinLength = password.length >= 6; 
  const hasMaxLength = password.length <= 16; 
  const hasDigits = /\d/.test(password); 
  const hasUpperCaseLetters = /[A-Z]/.test(password); 

  if (hasLatinLetters && hasMinLength && hasMaxLength && hasDigits && hasUpperCaseLetters) {
    return { isValid: true, errorMessage: '' };
  } else {
    return { 
      isValid: false, 
      errorMessage: 'Пароль має містити тільки латинські літери, бути не менше 6 та не більше 16 символів ,містити цифри та великі літери.' 
    };
  }
}

const validateConfirmPassword = (confirmPwd, originalPwd) => {
	if (confirmPwd === originalPwd){
		return {
			isValid: true, errorMessage: '' 
		}
	} else{
		return {
			isValid: false, errorMessage: 'Паролі не збігаються'
		} 
		}
	};

	const validateName = (name) => {
		const regex = /^[А-ЩЄІЇЮЯҐа-щєіїюяґ'’ʼ]+$/;
		if (!name) {
			return { isValid: false, errorMessage: 'Ім\'я не може бути порожнім' };
		} else if (name.length > 20) {
			return { isValid: false, errorMessage: 'Максимальна довжина імені 20 символів' };
		} else if (!regex.test(name)) {
			return { isValid: false, errorMessage: 'Використовуйте тільки українські літери' };
		} else {
			return { isValid: true, errorMessage: '' };
		}
	};
	

export default RegistrationForm;