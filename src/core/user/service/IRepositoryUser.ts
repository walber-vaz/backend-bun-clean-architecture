import { IUser } from '@/core/user/model/IUser';

export interface IRepositoryUser {
  create(user: IUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null>;
}
