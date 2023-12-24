import { CreationAttributes, DestroyOptions, UpdateOptions } from 'sequelize';
import { IQueryOption } from '@/interfaces';
import { ModelCtor, Model } from 'sequelize-typescript';
import { sequelize, UserEntity } from '@/models';

export class CRUDService<T extends Model> {
  constructor(model: ModelCtor<T>) {
    this.model = model;
  }

  protected readonly model: ModelCtor<T>;

  async transaction() {
    return await sequelize.transaction();
  }

  // TODO - Replace throw Error with custom error
  async getItem(queryInfo?: IQueryOption): Promise<T | null> {
    return await this.model.findOne(queryInfo);
  }

  async getAll(queryInfo?: IQueryOption): Promise<T[]> {
    return await this.model.findAll(queryInfo);
  }

  async getList(queryInfo?: IQueryOption): Promise<{ rows: T[]; count: number }> {
    return await this.model.findAndCountAll(queryInfo);
  }

  async create(params: CreationAttributes<T>, option?: IQueryOption): Promise<T> {
    return await this.model.create(params, option);
  }

  async update(params: CreationAttributes<T>, option?: UpdateOptions | IQueryOption): Promise<T> {
    const result: T = await this.model.findByPk(params.id);
    if (!result) throw new Error('User not found');
    result.set(params);
    await result.save();
    return result;
  }

  async delete(option?: DestroyOptions | IQueryOption): Promise<number | void> {
    return await this.model.destroy({ where: option.where });
  }
}
