import {
  IAllUsersPerPage,
  IUser,
  IUserResponseFindUser,
} from '@/core/user/model/IUser';
import { IRepositoryUser } from '@/core/user/service/IRepositoryUser';
import { t } from 'elysia';

export class RepositoryUserMemory implements IRepositoryUser {
  constructor(private readonly users: IUser[] = []) {}
  async create(user: IUser): Promise<IUser> {
    const newUser = {
      ...user,
      id: Math.random(),
    };
    this.users.push(newUser);

    return newUser;
  }

  async findById(id: number): Promise<IUserResponseFindUser | null> {
    const user = this.users.find((user) => user.id === id);

    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as IUserResponseFindUser;
    }

    return null;
  }

  async delete(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  async index(skip: number, take: number): Promise<IAllUsersPerPage> {
    const users = this.users.slice(skip, take);

    return {
      users,
      skip,
      take,
    };
  }

  async update(id: string, user: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
}
