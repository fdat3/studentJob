import { IsString, IsUUID, IsDate, IsEnum, IsNumber, Min } from 'class-validator';
import { IMember } from '@/interfaces';

export class MemberDto implements IMember {
  @IsUUID()
  public user_id: string;

  @IsUUID()
  public team_id: string;

  @IsDate()
  public created_at: Date;

  @IsDate()
  public updated_at: Date;
}
