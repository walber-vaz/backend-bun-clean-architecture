import { FindUserEmail } from '@/core/user/service/FindUserEmail';
import Elysia from 'elysia';

export class FindUserEmailController {
  constructor(readonly server: Elysia, readonly userCase: FindUserEmail) {
    server.get('/users', async ({ query }) => {
      const user = await userCase.execute(query.email!);
      if (!user) throw new Error('User not found');
      return user;
    });
  }
}
