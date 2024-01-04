import { ProposalStatus } from '@/common/constants';

export interface IProposal {
  id: string;
  user_id: string;
  job_id: string;
  price: number;
  status: ProposalStatus;
  cover_letter: string;
}
