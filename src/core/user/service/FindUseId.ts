import { IUserCase } from '@/core/shared/IUserCase';
import { IRepositoryUser } from './IRepositoryUser';
import { IUserResponseFindUser } from '@/core/user/model/IUser';

export class FindUserId implements IUserCase<number, IUserResponseFindUser> {
  constructor(private readonly repository: IRepositoryUser) {}

  async execute(input: number): Promise<IUserResponseFindUser> {
    const user = await this.repository.findById(input);
    if (!user) throw new Error('User not found');
    return {
      id: user.id!,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt!,
      updatedAt: user.updatedAt!,
      deletedAt: user.deletedAt!,
    };
  }
}
