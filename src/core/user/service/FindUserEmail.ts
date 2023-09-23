import { IUserCase } from '@/core/shared/IUserCase';
import { IRepositoryUser } from './IRepositoryUser';
import { IUserRepsonseFindUser } from '@/core/user/model/IUser';

export class FindUserEmail implements IUserCase<string, IUserRepsonseFindUser> {
  constructor(private readonly repository: IRepositoryUser) {}

  async execute(input: string): Promise<IUserRepsonseFindUser> {
    const user = await this.repository.findByEmail(input.trim());
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
