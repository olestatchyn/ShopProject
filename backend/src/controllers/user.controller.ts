import express, { Request, Response } from 'express';
import User from '../models/user';

let userRouter = express.Router();

let testUserArray: User[] = [
  { id: "70495e80-e9ec-451f-a677-011d53482894", name: 'John Doe', email: 'john@example.com' },
  { id: "b7b6a339-98ba-44cd-9b97-3ce500b5b140", name: 'Jane Smith', email: 'jane@example.com' },
];

userRouter.get('/users', async (req: Request, res: Response) => {
  try {
    res.status(200).json(testUserArray);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

export { userRouter };
