import express, { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../../errors/error-consts';
import BadRequestError from '../../errors/bad-request.error';
import { productAccessSchema } from '../../validation/products/product.validation';
import { getSaladLimited, createSalad, editSalad, deleteSaladByName } from '../../services/products/menuSalad.service';
import { saladPostSchema, saladPatchSchema, saladDeleteSchema } from '../../validation/products/salad.validation';

let saladRouter = express.Router();

saladRouter.get('/salad', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = productAccessSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const limit = req.query.limit;
    const saladArray = await getSaladLimited(limit);

    res.status(200).json(saladArray);
  } catch (error) {
    next(error);
  }
});

saladRouter.post('/salad', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = saladPostSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const saladData = req.body;
    await createSalad(saladData);

    res.status(201).json("Salad created");
  } catch (error) {
    next(error);
  }
});

saladRouter.patch('/salad', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = saladPatchSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const saladData = req.body;
    await editSalad(saladData);

    res.status(200).json("Salad edited");
  } catch (error) {
    next(error);
  }
});

saladRouter.delete('/salad', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = saladDeleteSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const saladName = req.query.name;
    await deleteSaladByName(saladName);

    res.status(200).json("Salad deleted");
  } catch (error) {
    next(error);
  }
});

export { saladRouter }