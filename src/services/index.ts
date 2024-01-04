import { TeamService } from '@services/CRUD/team.service.ts';

export * from '@/services/crud.service';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/CRUD/users.service';
import { JobService } from '@services/CRUD/job.service.ts';
import { ProposalService } from '@services/CRUD/proposal.service.ts';
import { MemberService } from '@services/CRUD/member.service.ts';

export const authService = new AuthService();
export const userService = new UserService();
export const jobService = new JobService();
export const proposalService = new ProposalService();
export const teamService = new TeamService();
export const memberService = new MemberService();
