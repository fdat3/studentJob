import {
  Table,
  PrimaryKey,
  Column,
  DataType,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Default,
  AllowNull,
  DefaultScope,
  Scopes,
  Unique,
  Validate,
} from 'sequelize-typescript';
import { Gender, Role, City } from '@/common/constants';
import { IUser } from '@/interfaces';

// =========================== DECLARING SCOPES ===========================
@DefaultScope(() => ({
  attributes: { exclude: ['password'] },
}))
@Scopes(() => ({
  withPassword: {
    attributes: { include: ['password'] },
  },
}))
// =========================== DECLARING TABLE ===========================
@Table({ tableName: 'users' })
export class UserEntity extends Model<UserEntity> implements IUser {
  @PrimaryKey
  @AllowNull(false)
  @Default(DataType.UUIDV4)
  @Column({
    field: 'id',
    type: DataType.UUID,
  })
  declare id: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @Column
  password: string;

  @Column
  full_name: string;

  @Column
  major: string;

  @Column
  address: string;

  @Default(City.HO_CHI_MINH)
  @Validate({ isIn: [[...Object.values(City)]] })
  @Column(DataType.SMALLINT)
  city: City;

  @Default(['Vietnamese'])
  @Column(DataType.ARRAY(DataType.STRING))
  languages: string[];

  @Column(DataType.TEXT)
  bio: string;

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  skills: string[];

  @Default(Gender.MALE)
  @Validate({ isIn: [[...Object.values(Gender)]] })
  @Column(DataType.SMALLINT)
  gender: Gender;

  @Unique
  @Column
  phone: string;

  @Column
  avatar: string;

  @Default(Role.STUDENT)
  @Column(DataType.SMALLINT)
  role: Role;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @DeletedAt
  @Column
  deleted_at: Date;

  // =========================== HOOKS ===========================
  // @BeforeCreate
  // static async hashPassword(user: UserEntity, options: any) {
  //   user.password = await Bun.password.hash(user.password, 10);
  // }

  // =========================== METHODS ===========================
  // public comparePassword(attempt: string): Promise<boolean> {
  //   return Bun.password.verify(attempt, this.password);
  // }

  // public toResponseObject(showToken: boolean = true): IUser {
  //   const { id, username, token, email, role, avatar
  // } = this;
  //   const responseObject: any = { id, username, email, role, avatar };
  //   if (showToken) {
  //     responseObject.token = token;
  //   }
  //   return responseObject;
  // }

  // public get token() {
  //   const { id, username, email, role, avatar } = this;
  //   return jwt.sign(
  //     {
  //       id, username, email, role, avatar
  //     },
  //     process.env.SECRET,
  //     { expiresIn: '7d' },
  //   );
  // }

  // =========================== ASSOCIATIONS ===========================
  // @BelongsTo(() => UserEntity)
  // user: UserEntity;
}
