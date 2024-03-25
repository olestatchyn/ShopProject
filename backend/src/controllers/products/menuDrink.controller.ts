import express, { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../../errors/error-consts';
import BadRequestError from '../../errors/bad-request.error';
import { productAccessSchema } from '../../validation/products/product.validation';
import { getDrinkLimited, createDrink, editDrink, deleteDrinkByName } from '../../services/products/menuDrink.service';
import { drinkPostSchema, drinkPatchSchema, drinkDeleteSchema } from '../../validation/products/drink.validation';

let drinkRouter = express.Router();

drinkRouter.get('/drink', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = productAccessSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const limit = req.query.limit;
    const page = req.query.page;
    
    const drinkArray = await getDrinkLimited(limit, page);

    res.status(200).json(drinkArray);
  } catch (error) {
    next(error);
  }
});

drinkRouter.post('/drink', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = drinkPostSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const drinkData = req.body;
    await createDrink(drinkData);

    res.status(201).json("Drink created");
  } catch (error) {
    next(error);
  }
});

drinkRouter.patch('/drink', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = drinkPatchSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const drinkData = req.body;
    await editDrink(drinkData);

    res.status(200).json("Drink edited");
  } catch (error) {
    next(error);
  }
});

drinkRouter.delete('/drink', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = drinkDeleteSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const drinkName = req.query.name;
    await deleteDrinkByName(drinkName);

    res.status(200).json("Drink deleted");
  } catch (error) {
    next(error);
  }
});

export { drinkRouter }