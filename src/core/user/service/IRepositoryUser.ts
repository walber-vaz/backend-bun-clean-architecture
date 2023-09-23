import { IUser, IUserResponseFindUser } from '@/core/user/model/IUser';

export interface IRepositoryUser {
  create(user: IUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUserResponseFindUser | null>;
}
