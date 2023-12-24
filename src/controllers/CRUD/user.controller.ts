import { NextFunction, Request, Response } from 'express';
import { UserDto } from '@/common/dtos';
import { userService } from '@/services';
import { CRUDController } from '@controllers/crud.controller';

export class UserController extends CRUDController<typeof userService> {
  constructor() {
    super(userService);
  }

  public findMany = async (req: Request, res: Response, next: NextFunction) => {
    console.log('CONTROLLER');
    try {
      const findAllUsersData: UserDto[] = await this.service.findAllUser();
      this.onSuccessPaginate(res, findAllUsersData);
    } catch (error) {
      next(error);
    }
  };

  public findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const findOneUserData: UserDto = await this.service.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: UserDto = req.body;
      const createUserData: UserDto = await this.service.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const userData: UserDto = req.body;
      const updateUserData: UserDto = await this.service.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const deleteUserData: UserDto = await this.service.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
