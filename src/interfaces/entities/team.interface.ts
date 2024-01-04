import { TeamStatus } from '@/common/constants/team.enum.ts';

export interface ITeam {
  id: string;
  leader_id: string;
  name: string;
  quantity: number;
  position: string[];
  skills: string[];
  location: string;
  status: TeamStatus;
  job_done: number;
  job_working: number;
  job_fail: number;
}
