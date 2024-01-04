import { teamController } from '@/controllers';
import { IRoute } from '@/interfaces';
import { CRUDRouter } from '@routes/crud.route';
import { QueryMiddleware } from '@/middlewares';

export class TeamRoute extends CRUDRouter<typeof teamController> implements IRoute {
  public path = '/teams';

  constructor() {
    super(teamController);
    this.customRouting();
  }

  public customRouting() {
    this.router.get(`${this.path}`, QueryMiddleware, this.controller.findMany);
  }
}
