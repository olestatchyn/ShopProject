import Joi from "joi";

const userRegisterEntitySchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userLoginEntitySchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export { userRegisterEntitySchema, userLoginEntitySchema }