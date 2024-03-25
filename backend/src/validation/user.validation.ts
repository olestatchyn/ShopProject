import Joi from "joi";

const userRegisterEntitySchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[a-zA-Zа-яА-ЯіІїЇєЄ`'"\s]+$/)
    .required()
    .messages({
      'string.base': 'Ім\'я повинно бути рядком.',
      'string.empty': 'Введіть, будь ласка, ваше ім\'я.',
      'string.min': 'Ім\'я повинно містити принаймні {#limit} символи.',
      'string.max': 'Ім\'я не повинно перевищувати {#limit} символів.',
      'string.pattern.base': 'Ім\'я може містити лише літери, пробіли та символи `\'"`.',
    }),
  email: Joi.string()
    .trim()
    .email()
    .required()
    .messages({
      'string.base': 'Електронна пошта повинна бути рядком.',
      'string.empty': 'Введіть, будь ласка, вашу електронну пошту.',
      'string.email': 'Введіть правильну електронну пошту.',
    }),
  password: Joi.string()
    .trim()
    .min(8)
    .max(30)
    .pattern(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]).{8,30}$/)
    .required()
    .messages({
      'string.base': 'Пароль повинен бути рядком.',
      'string.empty': 'Введіть, будь ласка, ваш пароль.',
      'string.min': 'Пароль повинен містити принаймні {#limit} символів.',
      'string.max': 'Пароль не повинен перевищувати {#limit} символів.',
      'string.pattern.base': 'Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ.',
    }),
  secretKey: Joi.string().optional(),
});

const userLoginEntitySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const userSendEmailEntitySchema = Joi.object({
  email: Joi.string().email().required(),
});

const userResetPasswordEntitySchema = Joi.object({
  encryptedEmail: Joi.string().required(),
  password: Joi.string().required(),
});

export { userRegisterEntitySchema, userLoginEntitySchema, userSendEmailEntitySchema, userResetPasswordEntitySchema }