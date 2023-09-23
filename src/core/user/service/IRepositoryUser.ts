import {
  IAllUsersPerPage,
  IUser,
  IUserResponseFindUser,
} from '@/core/user/model/IUser';

export interface IRepositoryUser {
  index(skip: number, take: number): Promise<IAllUsersPerPage>;
  create(user: IUser): Promise<IUser>;
  findById(id: number): Promise<IUserResponseFindUser | null>;
  findByEmail(email: string): Promise<IUserResponseFindUser | null>;
  update(id: string, user: IUser): Promise<IUser>;
  delete(id: string): Promise<IUser>;
}
