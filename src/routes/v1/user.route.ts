import { usersController } from '@/controllers';
import { UserDto } from '@/common/dtos';
import { authMiddleware, validationMiddleware } from '@/middlewares';
import { CRUDRouter } from '@routes/crud.route';
import { IRoute } from '@/interfaces';

export class UserRoute extends CRUDRouter<typeof usersController> implements IRoute {
  public path = '/users';

  constructor() {
    super(usersController);
    this.baseRouting();
  }
  // TODO: APPLY ADMIN MIDDLEWARE
  public baseRouting() {
    this.router.get(`${this.path}`, this.controller.findMany);
    this.router.get(`${this.path}/:id`, this.controller.findOne);
    this.router.post(`${this.path}`, this.authMiddlewares(), this.controller.create);

    this.router.put(`${this.path}/:id`, this.authMiddlewares(), this.controller.update);
    this.router.delete(`${this.path}/:id`, this.authMiddlewares(), this.controller.delete);
  }
  public authMiddlewares(): any[] {
    return [validationMiddleware(UserDto, 'body', true), authMiddleware];
  }
}
