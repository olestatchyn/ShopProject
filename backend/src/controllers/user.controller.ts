import express, { Request, Response } from 'express';
import { getUsers, checkIfUserExists, createNewUser } from '../services/user.service';
import { userSchema } from '../validation/createUser.validation';

let userRouter = express.Router();

userRouter.get('/users', async (req: Request, res: Response) => {
  try {
    const foundUsers = await getUsers();
    res.status(200).json(foundUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error getting all users' });
  }
});

userRouter.post('/users', async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const { error } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    
    const existingUser = await checkIfUserExists(email);

    if (existingUser) {
      return res.status(400).send({ error: 'User already exists' });
    }
  
    const createdUser = await createNewUser(req.body);

    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error creating new user' });
  }
});

export { userRouter };