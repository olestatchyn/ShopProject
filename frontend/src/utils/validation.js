export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || regex.test(email)) {
    return { isValid: true, errorMessage: '' };
  } else {
    return { isValid: false, errorMessage: 'Введіть коректну пошту' };
  }
};

export function validatePassword(password) {
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

export const validateConfirmPassword = (confirmPwd, originalPwd) => {
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

export const validateName = (name) => {
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
	