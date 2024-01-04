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
import { IProposal } from '@/interfaces';
import { JobEntity, UserEntity } from '@/models';
import { ProposalStatus } from '@/common/constants';

@Table({ tableName: 'proposals', timestamps: true, paranoid: false })
@DefaultScope(() => ({
  attributes: {
    exclude: ['deleted_at'],
  },
}))
export class ProposalEntity extends Model<ProposalEntity> implements IProposal {
  @Index
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @ForeignKey(() => UserEntity)
  @Column(DataType.UUID)
  user_id: string;

  @AllowNull(false)
  @ForeignKey(() => JobEntity)
  @Column(DataType.UUID)
  job_id: string;

  @Validate({ min: 0 })
  @Column
  price: number;

  @Default(ProposalStatus.WAITING)
  @Validate({ isIn: [[...Object.values(ProposalStatus)]] })
  @Column(DataType.SMALLINT)
  status: ProposalStatus;

  @Column(DataType.TEXT)
  cover_letter: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @DeletedAt
  @Column
  deleted_at: Date;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @BelongsTo(() => JobEntity, 'job_id')
  job: JobEntity;
}
