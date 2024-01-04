import {
  Table,
  PrimaryKey,
  Column,
  DataType,
  Model,
  Default,
  AllowNull,
  Index,
  ForeignKey,
  BelongsTo,
  Validate,
  CreatedAt,
  UpdatedAt,
  DefaultScope,
  HasMany,
} from 'sequelize-typescript';
import { ITeam } from '@/interfaces';
import { UserEntity } from '@/models';
import { TeamStatus } from '@/common/constants';

@Table({ tableName: 'teams', timestamps: true, paranoid: false })
@DefaultScope(() => ({
  attributes: {
    exclude: ['deleted_at'],
  },
}))
export class TeamEntity extends Model<TeamEntity> implements ITeam {
  @Index
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @ForeignKey(() => UserEntity)
  @Column(DataType.UUID)
  leader_id: string;

  @Index
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Validate({ min: 1 })
  @Default(1)
  @Column(DataType.SMALLINT)
  quantity: number;

  @Column(DataType.ARRAY(DataType.STRING))
  position: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  skills: string[];

  @Column
  location: string;

  @Validate({ isIn: [[...Object.values(TeamStatus)]] })
  @Column(DataType.SMALLINT)
  status: TeamStatus;

  @Default(0)
  @Validate({ min: 0 })
  @Column
  job_done: number;

  @Default(0)
  @Validate({ min: 0 })
  @Column
  job_working: number;

  @Default(0)
  @Validate({ min: 0 })
  @Column
  job_fail: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @BelongsTo(() => UserEntity, 'leader_id')
  leader: UserEntity;
}
