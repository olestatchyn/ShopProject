import Joi from "joi";

const drinkPostSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  sizeAndPrice: Joi.object({
    '30': Joi.number().required(),
    '40': Joi.number().required()
  }).required()
});

const drinkPatchSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  sizeAndPrice: Joi.object({
    '30': Joi.number(),
    '40': Joi.number()
  })
});

const drinkDeleteSchema = Joi.object({
  name: Joi.string().required(),
});

export { drinkPostSchema, drinkPatchSchema, drinkDeleteSchema }