export * from '@/controllers/crud.controller';
import { IndexController } from '@controllers/index.controller';
import { ImageController } from '@controllers/image.controller';
import { AuthController } from '@controllers/auth.controller';
import { UsersController } from '@controllers/CRUD/users.controller';
import { ProductController } from '@controllers/CRUD/products.controller';

const indexController = new IndexController();
const imageController = new ImageController();
const authController = new AuthController();
const usersController = new UsersController();
const productController = new ProductController();

export { indexController, imageController, authController, usersController, productController };
