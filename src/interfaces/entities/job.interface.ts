import { PriceType, RequiredLevel, WorkType } from '@/common/constants';

export interface IJob {
  id: string;
  owner_id: string;
  title: string;
  description: string;
  work_type: WorkType;
  location: string;
  proposal_count: number;
  price: number;
  price_type: PriceType;
  required_level: RequiredLevel;
  skills: string[];
}
