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
  DeletedAt,
  DefaultScope,
} from 'sequelize-typescript';
import { IJob } from '@/interfaces';
import { UserEntity } from '@/models';
import { PriceType, RequiredLevel, WorkType } from '@/common/constants';

@Table({ tableName: 'jobs', timestamps: true, paranoid: true })
@DefaultScope(() => ({
  attributes: {
    exclude: ['deleted_at'],
  },
}))
export class JobEntity extends Model<JobEntity> implements IJob {
  @Index
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @ForeignKey(() => UserEntity)
  @Column(DataType.UUID)
  owner_id: string;

  @AllowNull(false)
  @Index
  @Column
  title: string;

  @Column
  description: string;

  @Default(WorkType.CONTRACT)
  @Validate({ isIn: [[...Object.values(WorkType)]] })
  @Column(DataType.SMALLINT)
  work_type: WorkType;

  @Default(0)
  @Validate({ min: 0 })
  @Column
  proposal_count: number;

  @Default(0)
  @Validate({ min: 0 })
  @Column
  price: number;

  @Default(PriceType.FIXED)
  @Validate({ isIn: [[...Object.values(PriceType)]] })
  @Column(DataType.SMALLINT)
  price_type: PriceType;

  @Default(RequiredLevel.ENTRY)
  @Validate({ isIn: [[...Object.values(RequiredLevel)]] })
  @Column(DataType.SMALLINT)
  required_level: RequiredLevel;

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  skills: string[];

  @Column
  location: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @DeletedAt
  @Column
  deleted_at: Date;

  @BelongsTo(() => UserEntity, 'owner_id')
  user: UserEntity;
}
