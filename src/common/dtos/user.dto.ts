import { IsString, IsEmail, IsUUID, IsDate, IsEnum, IsArray } from 'class-validator';
import { Gender, Role, LoginType } from '@/common/constants';
import { IUser } from '@/interfaces';

export class UserDto implements IUser {
  @IsUUID()
  public id: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public full_name: string;

  @IsString()
  public major: string;

  @IsString()
  public address: string;

  @IsString()
  public city: string;

  @IsArray()
  public languages: string[];

  @IsString()
  public bio: string;

  @IsString({ each: true })
  public skills: string[];

  @IsEnum(Gender)
  public gender: Gender;

  @IsString()
  public phone: string;

  @IsString()
  public avatar: string;

  @IsEnum(Role)
  public role: Role;

  @IsDate()
  public created_at: Date;

  @IsDate()
  public updated_at: Date;
}
