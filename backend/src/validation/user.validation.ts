import Joi from "joi";

const userRegisterEntitySchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const userLoginEntitySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const userSendEmailEntitySchema = Joi.object({
  email: Joi.string().email().required(),
  link: Joi.string().required(),
});

const userResetPasswordEntitySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { userRegisterEntitySchema, userLoginEntitySchema, userSendEmailEntitySchema, userResetPasswordEntitySchema }