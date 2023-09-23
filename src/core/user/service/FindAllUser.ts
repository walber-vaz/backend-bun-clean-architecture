import { IUserCase } from '@/core/shared/IUserCase';
import { IRepositoryUser } from './IRepositoryUser';
import { IAllUsersPerPage } from '@/core/user/model/IUser';

export class FindAllUser
  implements IUserCase<{ skip: number; take: number }, IAllUsersPerPage>
{
  constructor(private readonly repository: IRepositoryUser) {}

  async execute({
    skip,
    take,
  }: {
    skip: number;
    take: number;
  }): Promise<IAllUsersPerPage> {
    const users = await this.repository.index(skip, take);
    return users;
  }
}
