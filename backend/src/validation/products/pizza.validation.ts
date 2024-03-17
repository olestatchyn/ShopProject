import Joi from "joi";

const pizzaPostSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  sizeAndPrice: Joi.object({
    '30': Joi.number().required(),
    '40': Joi.number().required()
  }).required()
});

const pizzaPatchSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  sizeAndPrice: Joi.object({
    '30': Joi.number(),
    '40': Joi.number()
  })
});

const pizzaDeleteSchema = Joi.object({
  name: Joi.string().required(),
});

export { pizzaPostSchema,pizzaPatchSchema, pizzaDeleteSchema }