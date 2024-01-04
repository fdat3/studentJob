import * as jwt from 'jsonwebtoken';
import config from '@config';
import { UserEntity } from '@/models';
import { UserDto } from '@/common/dtos';
import { AppException } from '@/common/exceptions';
import { DataStoredInToken, IUser } from '@/interfaces';
import { isEmpty } from '@/utils';
import { CRUDService } from '@services/crud.service';
import { GooglePayload, GoogleResponse } from '@/common/constants';
import fetch from 'node-fetch';

export class AuthService extends CRUDService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  public async signup(userData: UserDto): Promise<{ accessToken: string; user: IUser }> {
    if (isEmpty(userData)) throw new AppException(400, 'userData is empty');

    const findUser: IUser = await this.model.findOne({ where: { email: userData.email } });
    if (findUser) throw new AppException(409, `This email ${userData.email} already exists`);

    const hashedPassword: string = await Bun.password.hash(userData.password);
    const user: IUser = await this.model.create({ ...userData, password: hashedPassword });
    const accessToken: string = this.createAccessToken(user);
    return { accessToken, user };
  }

  public async login(userData: UserDto): Promise<{ accessToken: string; findUser: IUser }> {
    if (isEmpty(userData)) throw new AppException(400, 'userData is empty');

    const findUser: IUser = await this.model.scope('withPassword').findOne({
      where: { email: userData.email },
      raw: true,
    });
    if (!findUser) throw new AppException(409, `This email ${userData.email} was not found`);
    const isPasswordMatching: boolean = await Bun.password.verify(userData.password, findUser.password);
    if (!isPasswordMatching) throw new AppException(409, 'Password not matching');

    const accessToken: string = this.createAccessToken(findUser);
    // const refreshToken = this.createRefreshToken(findUser);

    return { accessToken, findUser };
  }

  public async googleSignIn(payload: GooglePayload): Promise<{ accessToken: string; user: IUser }> {
    const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${payload.access_token}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${payload.access_token}`,
        Accept: 'application/json',
      },
    });
    const data: GoogleResponse = (await response.json()) as GoogleResponse;
    const result = await this.model.findOrCreate({
      where: { email: data.email, full_name: data.name, avatar: data.picture },
    });

    const accessToken: string = this.createAccessToken(result[0]);
    return { accessToken, user: result[0] };
  }

  public createAccessToken(user: IUser): string {
    const dataStoredInToken: DataStoredInToken = { id: user.id, role: user.role };
    const secretKey: string = config.SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return jwt.sign(dataStoredInToken, secretKey, { expiresIn });
  }

  public createRefreshToken(user: IUser): Object {
    const dataStoredInToken: DataStoredInToken = { id: user.id, role: user.role };
    const secretKey: string = config.SECRET_KEY;
    const expiresIn: number = 60 * 60 * 24 * 7;
    const refreshToken: string = jwt.sign(dataStoredInToken, secretKey, { expiresIn });
    return { refreshToken, expiresIn };
  }

  public createCookie(accessToken: any, refreshToken: any): string {
    return `Authorization=${accessToken.accessToken}; HttpOnly; Max-Age=${accessToken.expiresIn}`;
  }
}
