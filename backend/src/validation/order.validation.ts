const Joi = require('joi');

const orderSchema = Joi.object({
  order: Joi.object({
    pizza: Joi.array().items(
      Joi.object({
        name: Joi.string(),
        size: Joi.string(),
        quantity: Joi.number(),
      })
    ).optional(),
    drink: Joi.array().items(
      Joi.object({
        name: Joi.string(),
        size: Joi.string(),
        quantity: Joi.number(),
      })
    ).optional(),
    salad: Joi.array().items(
      Joi.object({
        name: Joi.string(),
        size: Joi.string(),
        quantity: Joi.number(),
      })
    ).optional(),
    other: Joi.array().items(
      Joi.object({
        name: Joi.string(),
        size: Joi.string(),
        quantity: Joi.number(),
      })
    ).optional(),
  }).required(),
  contacts: Joi.object({
    name: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    email: Joi.string().email().required(),
  }).required(),
  address: Joi.object({
    street: Joi.string().required(),
    building: Joi.string().required(),
    flat: Joi.string().optional(),
  }).required(),
  dateAndTime: Joi.object({
    date: Joi.string().required(),
    time: Joi.string().required(),
  }).required(),
  paymentMethod: Joi.string().valid('Credit Card', 'Cash').required(),
  status: Joi.string().valid('Pending', 'Delivered', 'Complete', 'Cancelled').required(),
  totalPrice: Joi.number().required(),
});

export { orderSchema }