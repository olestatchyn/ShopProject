import express, { Request, Response, NextFunction } from 'express';
import { dbStatus } from '../database/connection';

let healthRouter = express.Router();

healthRouter.get('/health', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dbHealth = dbStatus();
    const message = `Application is healthy. Database status: ${dbHealth}`;
    res.status(200).json({ message });
    
  } catch (error) {
    next(error);
  }
});

export { healthRouter }