import { IUser } from '../../core/user/model/IUser';
import { IRepositoryUser } from '../../core/user/service/IRepositoryUser';

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

  async findByEmail(email: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.email === email);

    return user || null;
  }
}
