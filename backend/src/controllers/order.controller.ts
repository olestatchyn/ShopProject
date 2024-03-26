import express, { Request, Response, NextFunction } from 'express';
import BadRequestError from '../errors/bad-request.error';
import { ErrorMessage } from '../errors/error-consts';
import { orderSchema } from '../validation/order.validation';
import { createOrder, getOrders } from '../services/order.service';

let orderRouter = express.Router();

orderRouter.post('/order', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = orderSchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(bodyValidation.error.details[0].message);
    }

    let orderInfo = req.body;
    await createOrder(orderInfo);

    res.status(201).json("Order created");
  } catch (error) {
    next(error);
  }
});

orderRouter.get('/order', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allOrders = await getOrders();

    res.status(201).json(allOrders);
  } catch (error) {
    next(error);
  }
});

export { orderRouter }