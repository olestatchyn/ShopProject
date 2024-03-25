import { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../errors/error-consts';
import { getUserByEmail } from '../repositories/user.repository';
import Forbidden from '../errors/forbidden.error';

export async function isAdmin(req: Request, res: Response, next:NextFunction) {
  try{
    const userEmail = req.user.email;
    const user = await getUserByEmail(userEmail);
    
    if (user.role !== 'Admin') {
      throw new Forbidden(ErrorMessage.notAdmin);
    }
    next();
    
  } catch(error) {
    next(error);
  }
}