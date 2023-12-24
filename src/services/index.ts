export * from '@/services/crud.service';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/CRUD/users.service';
import { JobService } from '@services/CRUD/job.service.ts';

const authService = new AuthService();
const userService = new UserService();
const jobService = new JobService();
export { authService, userService, jobService };
