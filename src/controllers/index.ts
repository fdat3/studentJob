export * from '@/controllers/crud.controller';
import { IndexController } from '@controllers/index.controller';
import { ImageController } from '@controllers/image.controller';
import { AuthController } from '@controllers/auth.controller';
import { UserController } from '@controllers/CRUD/user.controller.ts';
import { JobController } from '@controllers/CRUD/job.controller.ts';

const indexController = new IndexController();
const imageController = new ImageController();
const authController = new AuthController();
const usersController = new UserController();
const jobController = new JobController();

export { indexController, imageController, authController, usersController, jobController };
