import express, { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../../errors/error-consts';
import BadRequestError from '../../errors/bad-request.error';
import { productAccessSchema } from '../../validation/products/product.validation';
import { getDrinkLimited, createDrink, editDrink, deleteDrinkByName } from '../../services/products/menuDrink.service';
import { drinkPostSchema, drinkPatchSchema, drinkDeleteSchema } from '../../validation/products/drink.validation';
import { verifyToken } from '../../middleware/authentication.middleware';
import { isAdmin } from '../../middleware/isAdmin.middleware';

let drinkRouter = express.Router();

drinkRouter.get('/drink', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = productAccessSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(bodyValidation.error.details[0].message);
    }

    const limit = req.query.limit;
    const page = req.query.page;
    
    const drinkArray = await getDrinkLimited(limit, page);

    res.status(200).json(drinkArray);
  } catch (error) {
    next(error);
  }
});

drinkRouter.post('/drink', verifyToken, isAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = drinkPostSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(bodyValidation.error.details[0].message);
    }

    const drinkData = req.body;
    await createDrink(drinkData);

    res.status(201).json("Drink created");
  } catch (error) {
    next(error);
  }
});

drinkRouter.patch('/drink', verifyToken, isAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = drinkPatchSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(bodyValidation.error.details[0].message);
    }

    const drinkData = req.body;
    await editDrink(drinkData);

    res.status(200).json("Drink edited");
  } catch (error) {
    next(error);
  }
});

drinkRouter.delete('/drink', verifyToken, isAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = drinkDeleteSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(bodyValidation.error.details[0].message);
    }

    const drinkName = req.query.name;
    await deleteDrinkByName(drinkName);

    res.status(200).json("Drink deleted");
  } catch (error) {
    next(error);
  }
});

export { drinkRouter }