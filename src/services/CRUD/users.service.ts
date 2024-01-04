import { UserEntity } from '@/models';
import { UserDto } from '@/common/dtos';
import { AppException } from '@/common/exceptions';
import { IQueryOption, IUser } from '@/interfaces';
import { isEmpty } from '@/utils';
import { CRUDService } from '@services/crud.service';
import { CreationAttributes } from 'sequelize';

export class UserService extends CRUDService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  public async getAll(queryInfo?: IQueryOption): Promise<UserEntity[]> {
    return await this.model.findAll(queryInfo);
  }

  public async findUserById(userId: string): Promise<UserDto> {
    if (isEmpty(userId)) throw new AppException(400, 'UserId is empty');

    const findUser: UserDto = await this.model.findByPk(userId);
    if (!findUser) throw new AppException(409, "UsersInterface doesn't exist");

    return findUser;
  }

  public async create(userData: CreationAttributes<UserEntity>): Promise<UserEntity> {
    if (isEmpty(userData)) throw new AppException(400, 'userData is empty');

    const findUser: IUser = await this.model.findOne({ where: { email: userData.email } });
    if (findUser) throw new AppException(409, `This email ${userData.email} already exists`);

    const hashedPassword: string = await Bun.password.hash(userData.password);
    return await this.model.create({ ...userData, password: hashedPassword });
  }

  public async updateUser(userData: UserDto, userId: string): Promise<UserEntity> {
    if (isEmpty(userData)) throw new AppException(400, 'userData is empty');

    const findUser: UserDto = await this.model.findByPk(userId);
    if (!findUser) throw new AppException(409, "UsersInterface doesn't exist");

    if (userData.password) {
      userData.password = await Bun.password.hash(userData.password);
    }
    await this.model.update({ ...userData }, { where: { id: userId } });

    return await this.model.findByPk(userId);
  }

  public async deleteUser(userId: string): Promise<number | void> {
    if (isEmpty(userId)) throw new AppException(400, "UsersInterface doesn't existId");
    return await this.model.destroy({ where: { id: userId } });
  }
}
