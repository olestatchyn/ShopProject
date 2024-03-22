import Joi from "joi";

const saladPostSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  sizeAndPrice: Joi.object({
    '30': Joi.number().required(),
    '40': Joi.number().required()
  }).required()
});

const saladPatchSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  sizeAndPrice: Joi.object({
    '30': Joi.number(),
    '40': Joi.number()
  })
});

const saladDeleteSchema = Joi.object({
  name: Joi.string().required(),
});

export { saladPostSchema, saladPatchSchema, saladDeleteSchema }