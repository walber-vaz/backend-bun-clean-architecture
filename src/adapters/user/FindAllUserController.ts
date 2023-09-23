import { FindAllUser } from '@/core/user/service/FindAllUser';
import Elysia from 'elysia';

export class FindAllUserController {
  constructor(readonly server: Elysia, readonly userCase: FindAllUser) {
    server.get('/users', async ({ query }) => {
      const { skip, take } = query;
      const users = await userCase.execute({
        skip: Number(skip) || 1,
        take: Number(take) || 10,
      });
      return users;
    });
  }
}
