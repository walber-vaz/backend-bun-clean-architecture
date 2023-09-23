import { IUser, IUserResponseFindUser } from '@/core/user/model/IUser';

export interface IRepositoryUser {
  index(): Promise<IUser[]>;
  create(user: IUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUserResponseFindUser | null>;
  findById(id: number): Promise<IUserResponseFindUser | null>;
  update(id: string, user: IUser): Promise<IUser>;
  delete(id: string): Promise<IUser>;
}
