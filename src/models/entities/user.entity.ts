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
    Index, Unique,
} from 'sequelize-typescript';
import { Gender, Role } from '@/common/constants';
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
@Table({ tableName: 'user' })
export class UserEntity extends Model<UserEntity> implements IUser {
  @Index
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV4)
  @Column({
    field: 'id',
    type: DataType.UUID,
  })
  declare id: string;

  @Index
  @Column({ field: 'email', type: DataType.STRING, unique: true })
  email: string;

  @Column({ field: 'password', type: DataType.STRING })
  password: string;

  @Column({ field: 'full_name', type: DataType.STRING })
  full_name: string;

  @Column({ field: 'major', type: DataType.STRING })
  major: string;

  @Column({ field: 'address', type: DataType.STRING })
  address: string;

  @Column({ field: 'city', type: DataType.STRING })
  city: string;

  @Column({ field: 'languages', type: DataType.ARRAY(DataType.STRING) })
  languages: string[];

  @Column({ field: 'bio', type: DataType.TEXT })
  bio: string;

  @Column({
    field: 'gender',
    type: DataType.SMALLINT,
  })
  gender: Gender;

  @Unique
  @Column({ field: 'phone', type: DataType.STRING})
  phone: string;

  @Column({ field: 'avatar', type: DataType.STRING })
  avatar: string;

  @Column({
    field: 'role',
    type: DataType.SMALLINT,
  })
  role: Role;

  @CreatedAt
  @Column({ field: 'created_at' })
  created_at: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updated_at: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
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
