import { Table, PrimaryKey, Column, Model, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, DefaultScope, DataType, HasOne } from 'sequelize-typescript';
import { IMember } from '@/interfaces';
import { TeamEntity, UserEntity } from '@/models';

@Table({ tableName: 'members', timestamps: true, paranoid: false })
export class MemberEntity extends Model<MemberEntity> implements IMember {
  @PrimaryKey
  @ForeignKey(() => UserEntity)
  @Column(DataType.UUID)
  user_id: string;

  @PrimaryKey
  @ForeignKey(() => TeamEntity)
  @Column(DataType.UUID)
  team_id: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @BelongsTo(() => UserEntity)
  member: UserEntity;
  @BelongsTo(() => TeamEntity, 'team_id')
  team: TeamEntity;
}
