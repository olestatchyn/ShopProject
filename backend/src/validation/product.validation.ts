import Joi from "joi";

const productAccessSchema = Joi.object({
  page: Joi.number().required(),
  limit: Joi.number().required()
});

export { productAccessSchema }