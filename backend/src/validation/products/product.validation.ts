import Joi from "joi";

const productAccessSchema = Joi.object({
  limit: Joi.number().required(),
  page: Joi.number().required(),
});

export { productAccessSchema }