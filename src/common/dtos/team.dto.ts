import { IsString, IsUUID, IsDate, IsEnum, IsNumber, Min } from 'class-validator';
import { ITeam } from '@/interfaces';
import { TeamStatus } from '@/common/constants/team.enum.ts';

export class TeamDto implements ITeam {
  @IsUUID()
  public id: string;

  @IsUUID()
  public leader_id: string;

  @IsString()
  public name: string;

  @IsNumber()
  public quantity: number;

  @IsString({ each: true })
  public position: string[];

  @IsString({ each: true })
  public skills: string[];

  @IsString()
  public location: string;

  @IsEnum(TeamStatus)
  public status: TeamStatus;

  @Min(0)
  @IsNumber()
  public job_done: number;

  @Min(0)
  @IsNumber()
  public job_working: number;

  @Min(0)
  @IsNumber()
  public job_fail: number;

  @IsDate()
  public created_at: Date;

  @IsDate()
  public updated_at: Date;
}
