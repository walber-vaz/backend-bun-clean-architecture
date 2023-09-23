import { IUser, IUserResponseFindUser } from '@/core/user/model/IUser';
import { IRepositoryUser } from '@/core/user/service/IRepositoryUser';
import { PrismaClient } from '@prisma/client';

export class RepositoryUserPrisma implements IRepositoryUser {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  index(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: number): Promise<IUserResponseFindUser | null> {
    return (await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    })) as IUserResponseFindUser;
  }
  update(id: string, user: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  async create(user: IUser): Promise<IUser> {
    return (await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        deletedAt: null,
      },
    })) as IUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return (await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    })) as IUser;
  }
}
