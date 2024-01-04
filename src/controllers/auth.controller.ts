import { NextFunction, Request, Response } from 'express';
import { UserDto } from '@/common/dtos';
import { RequestWithUser, IUser } from '@/interfaces';
import { authService } from '@/services';
import { logger } from '@/utils';
import { CRUDController } from '@controllers/crud.controller';
import { GooglePayload } from '@/common/constants';

export class AuthController extends CRUDController<typeof authService> {
  constructor() {
    super(authService);
  }

  public verify = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      res.status(200).json({ data: user, message: 'verify', status: 200 });
    } catch (error) {
      next(error);
    }
  };

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
    try {
      const userData: UserDto = req.body;
      const { accessToken, user } = await this.service.signup(userData);

      res.status(201).json({ data: user, token: accessToken });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: UserDto = req.body;
      const { accessToken, findUser } = await this.service.login(userData);

      // res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, token: accessToken });
    } catch (error) {
      next(error);
    }
  };

  public googleSignIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const googlePayload: GooglePayload = req.body;
      const { accessToken, user } = await this.service.googleSignIn(googlePayload);

      res.status(200).json({ data: user, token: accessToken });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}
