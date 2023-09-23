import { FindUserId } from '@/core/user/service/FindUseId';
import Elysia from 'elysia';

export class FindUserIdController {
  constructor(readonly server: Elysia, readonly userCase: FindUserId) {
    server.get('/users/:id', async ({ params }) => {
      const user = await userCase.execute(Number(params.id));
      if (!user) throw new Error('User not found');
      return user;
    });
  }
}
