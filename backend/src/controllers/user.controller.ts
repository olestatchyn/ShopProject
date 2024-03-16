import express, { Request, Response, NextFunction } from 'express';
import { loginUser, registerUser, handlePasswordReset, resetPassword } from '../services/user.service';
import { userLoginEntitySchema, userRegisterEntitySchema, userResetPasswordEntitySchema, userSendEmailEntitySchema } from '../validation/user.validation';
import BadRequestError from '../errors/bad-request.error';
import { ErrorMessage } from '../errors/error-consts';

let userRouter = express.Router();

userRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = userRegisterEntitySchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    let userInfo = req.body;
    await registerUser(userInfo);

    res.status(201).json("User created");
  } catch (error) {
    next(error);
  }
});

userRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = userLoginEntitySchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    let userInfo = req.body;
    const token = await loginUser(userInfo);

    res.status(201).json(token);
  } catch (error) {
    next(error);
  }
});

userRouter.post('/login/reset-password', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = userSendEmailEntitySchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    let userInfo = req.body;
    await handlePasswordReset(userInfo.email);

    res.status(201).json("Email sent");
  } catch (error) {
    next(error);
  }
});

userRouter.patch('/login/reset-password', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyValidation = userResetPasswordEntitySchema.validate(req.body);

    if (bodyValidation.error) {
      throw new BadRequestError(ErrorMessage.invalidData);
    }

    let userInfo = req.body;
    await resetPassword(userInfo);

    res.status(200).json("Password has been updated");
  } catch (error) {
    next(error);
  }
});

export { userRouter };