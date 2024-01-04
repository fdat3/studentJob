import type { Gender, UserRoles } from '@/common/const/user.const';
import type { IUser } from '@/interface/entities/user.interface';

export class UserDto implements IUser {
  id: string;

  email: string;

  password: string;

  full_name: string;

  major: string;

  gender: Gender;

  phone: string;

  address: string;

  city: string;

  avatar: string;

  languages: string[];

  bio: string;

  skills: string[];

  role: UserRoles;

  constructor(data: any) {
    this.id = data.id;
    this.email = data.email;
    this.password = data.password;
    this.full_name = data.full_name;
    this.gender = data.gender;
    this.major = data.major;
    this.phone = data.phone;
    this.address = data.address;
    this.city = data.city;
    this.languages = data.languages;
    this.bio = data.bio;
    this.skills = data.skills;
    this.role = data.role;
    this.avatar = data.avatar;
  }
}
