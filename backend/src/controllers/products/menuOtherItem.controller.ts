import express, { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../../errors/error-consts';
import BadRequestError from '../../errors/bad-request.error';
import { productAccessSchema } from '../../validation/products/product.validation';
import { getOtherItemLimited, createOtherItem, editOtherItem, deleteOtherItemByName } from '../../services/products/menuOtherItem.service';
import { otherItemPostSchema, otherItemPatchSchema, otherItemDeleteSchema } from '../../validation/products/otherItem.validation';

let otherItemRouter = express.Router();

otherItemRouter.get('/other', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = productAccessSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const limit = req.query.limit;
    const page = req.query.page;

    const otherItemArray = await getOtherItemLimited(limit, page);

    res.status(200).json(otherItemArray);
  } catch (error) {
    next(error);
  }
});

otherItemRouter.post('/other', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = otherItemPostSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const otherItemData = req.body;
    await createOtherItem(otherItemData);

    res.status(201).json("Item of Other category deleted");
  } catch (error) {
    next(error);
  }
});

otherItemRouter.patch('/other', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = otherItemPatchSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const otherItemData = req.body;
    await editOtherItem(otherItemData);

    res.status(200).json("Item of Other category deleted");
  } catch (error) {
    next(error);
  }
});

otherItemRouter.delete('/other', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = otherItemDeleteSchema.validate(req.query);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    const otherItemName = req.query.name;
    await deleteOtherItemByName(otherItemName);

    res.status(200).json("Item of Other category deleted");
  } catch (error) {
    next(error);
  }
});

export { otherItemRouter }