import express, { Request, Response, NextFunction } from 'express';
import { getMostPopularDrinksAndOtherItems } from '../../services/products/popularity.controller';

let popularityRouter = express.Router();

popularityRouter.get('/mostpopular', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sixMostPopular = await getMostPopularDrinksAndOtherItems();

    res.status(200).json(sixMostPopular);
  } catch (error) {
    next(error);
  }
});

export { popularityRouter }