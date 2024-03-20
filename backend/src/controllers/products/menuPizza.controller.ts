import express, { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../../errors/error-consts';
import BadRequestError from '../../errors/bad-request.error';
import { productAccessSchema } from '../../validation/products/product.validation';
import { getPizzaLimited, createPizza, editPizza, deletePizzaByName } from '../../services/products/menuPizza.service';
import { pizzaDeleteSchema, pizzaPatchSchema, pizzaPostSchema } from '../../validation/products/pizza.validation';

let pizzaRouter = express.Router();

pizzaRouter.get('/pizza', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = productAccessSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const limit =  req.query.limit;
    const pizzaArray = await getPizzaLimited(limit);

    res.status(200).json(pizzaArray);
  } catch (error) {
    next(error);
  }
});

pizzaRouter.post('/pizza', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = pizzaPostSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const pizzaData = req.body;
    await createPizza(pizzaData);

    res.status(201).json("Pizza created");
  } catch (error) {
    next(error);
  }
});

pizzaRouter.patch('/pizza', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = pizzaPatchSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const pizzaData =  req.body;
    await editPizza(pizzaData);

    res.status(200).json("Pizza edited");
  } catch (error) {
    next(error);
  }
});

pizzaRouter.delete('/pizza', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = pizzaDeleteSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const pizzaName =  req.query.name;
    await deletePizzaByName(pizzaName);

    res.status(200).json("Pizza deleted");
  } catch (error) {
    next(error);
  }
});

export { pizzaRouter }