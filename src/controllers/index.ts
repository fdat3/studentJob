import { TeamController } from '@controllers/CRUD/team.controller.ts';

export * from '@/controllers/crud.controller';
import { IndexController } from '@controllers/index.controller';
import { ImageController } from '@controllers/image.controller';
import { AuthController } from '@controllers/auth.controller';
import { UserController } from '@controllers/CRUD/user.controller.ts';
import { JobController } from '@controllers/CRUD/job.controller.ts';
import { ProposalController } from '@controllers/CRUD/proposal.controller.ts';
import { MemberController } from '@controllers/CRUD/member.controller.ts';

export const indexController = new IndexController();
export const imageController = new ImageController();
export const authController = new AuthController();
export const usersController = new UserController();
export const jobController = new JobController();
export const proposalController = new ProposalController();
export const teamController = new TeamController();
export const memberController = new MemberController();
