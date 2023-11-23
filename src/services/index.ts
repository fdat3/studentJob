export * from '@/services/crud.service';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/CRUD/users.service';
import { ProductService } from '@services/CRUD/products.service';

const authService = new AuthService();
const userService = new UserService();
const productService = new ProductService();
export { authService, userService, productService };
