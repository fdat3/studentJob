import { proposalController } from '@/controllers';
import { IRoute } from '@/interfaces';
import { CRUDRouter } from '@routes/crud.route';
import { QueryMiddleware } from '@/middlewares';

export class ProposalRoute extends CRUDRouter<typeof proposalController> implements IRoute {
  public path = '/proposals';

  constructor() {
    super(proposalController);
    this.customRouting();
  }

  public customRouting() {
    this.router.get(`${this.path}`, QueryMiddleware, this.controller.findMany);
  }
}
