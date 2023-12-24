import { Router } from 'express';
import { jobController } from '@/controllers';
import { IRoute } from '@/interfaces';
import { CRUDRouter } from '@routes/crud.route';
import { QueryMiddleware } from '@/middlewares';

export class JobRoute extends CRUDRouter<typeof jobController> implements IRoute {
  public path = '/jobs';

  constructor() {
    super(jobController);
    this.customRouting();
  }

  public customRouting() {
    this.router.get(`${this.path}`, QueryMiddleware, this.controller.getExperiences);
  }
}
