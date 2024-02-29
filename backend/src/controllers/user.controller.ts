import express, { Request, Response } from 'express';
import User from '../models/user';

let userRouter = express.Router();

let testUserArray: User[] = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

userRouter.get('/users', async (req: Request, res: Response) => {
  try {
    res.status(200).json(testUserArray);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

userRouter.post('/users', async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const existingUser = testUserArray.find(user => user.email === email);
    
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser: User = {
      name,
      email
    };

    testUserArray.push(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error creating new user' });
  }
});

export { userRouter };