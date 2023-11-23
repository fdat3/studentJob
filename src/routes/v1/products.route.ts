import { Router } from 'express';
import { productController } from '@/controllers';
import { IRoute } from '@/interfaces';
import { CRUDRouter } from '@routes/crud.route';
import { QueryMiddleware } from '@/middlewares';

export class ProductRoute extends CRUDRouter<typeof productController> {
  public path = '/products';

  constructor() {
    super(productController);
    this.customRouting();
  }

  public customRouting() {
    this.router.get(`${this.path}`, QueryMiddleware, this.controller.getProducts);
  }
}
