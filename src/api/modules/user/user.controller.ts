import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import { IUser } from './user.model';
import { AppError } from '../../middlewares/error.middleware';

class UserController {
  constructor() {}

  getAllUsers = async (req: Request, res: Response<IUser[]>, next: NextFunction) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req: Request<{ id: string }>, res: Response<IUser>, next: NextFunction) => {
    try {
      const user = await userService.getUserById(parseInt(req.params.id));
      if (user) {
        return res.status(200).json(user);
      }
      throw new AppError(404, 'user not found');
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController();
