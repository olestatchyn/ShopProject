import Joi from "joi";

const otherItemPostSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  sizeAndPrice: Joi.object({
    '30': Joi.number().required(),
    '40': Joi.number().required()
  }).required()
});

const otherItemPatchSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  sizeAndPrice: Joi.object({
    '30': Joi.number(),
    '40': Joi.number()
  })
});

const otherItemDeleteSchema = Joi.object({
  name: Joi.string().required(),
});

export { otherItemPostSchema, otherItemPatchSchema, otherItemDeleteSchema }