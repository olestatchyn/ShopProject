import express, { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../../errors/error-consts';
import BadRequestError from '../../errors/bad-request.error';
import { productAccessSchema } from '../../validation/product.validation';
import { getPizzaArray } from '../../services/products/pizza.service';

let pizzaRouter = express.Router();

pizzaRouter.get('/pizza', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = productAccessSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const pizzaParams =  req.query;
    const pizzaArray = await getPizzaArray(pizzaParams);

    res.status(200).json(pizzaArray);
  } catch (error) {
    next(error);
  }
});

export { pizzaRouter }