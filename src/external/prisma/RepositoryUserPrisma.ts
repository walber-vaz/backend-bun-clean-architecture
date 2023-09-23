import {
  IAllUsersPerPage,
  IUser,
  IUserResponseFindUser,
} from '@/core/user/model/IUser';
import { IRepositoryUser } from '@/core/user/service/IRepositoryUser';
import { PrismaClient } from '@prisma/client';

export class RepositoryUserPrisma implements IRepositoryUser {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async index(page: number, pageSize: number): Promise<IAllUsersPerPage> {
    if (page < 1) {
      throw new Error('Invalid page');
    }

    if (pageSize < 1) {
      throw new Error('Invalid page size');
    }

    const skip = (page - 1) * pageSize;
    const users = await this.prisma.user.findMany({
      skip,
      take: pageSize,
    });

    const totalUsers = (await this.prisma.user.count()) as number;
    const totalPages = Math.ceil(totalUsers / pageSize) as number;

    return {
      users: users as IUserResponseFindUser[],
      skip,
      take: pageSize,
      total: totalUsers,
      pages: totalPages,
    };
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
      },
    })) as IUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return (await this.prisma.user.findUnique({
      where: {
        email,
      },
    })) as IUser;
  }
}
