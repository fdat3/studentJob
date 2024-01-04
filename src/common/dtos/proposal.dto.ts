import { IsString, IsEmail, IsUUID, IsDate, IsNumber, IsEnum } from 'class-validator';
import { IProposal } from '@/interfaces';
import { ProposalStatus } from '@/common/constants';

export class ProposalDto implements IProposal {
  @IsUUID()
  public id: string;

  @IsString()
  public user_id: string;

  @IsString()
  public job_id: string;

  @IsNumber()
  public price: number;

  @IsEnum(ProposalStatus)
  public status: ProposalStatus;

  @IsString()
  public cover_letter: string;

  @IsDate()
  public created_at: Date;

  @IsDate()
  public updated_at: Date;
}
