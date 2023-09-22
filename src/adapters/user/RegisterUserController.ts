import Elysia from 'elysia';
import { IUser } from '@/core/user/model/IUser';
import { RegisterUser } from '@/core/user/service/RegisterUser';

export class RegisterUserController {
  constructor(readonly server: Elysia, readonly userCase: RegisterUser) {
    server.post('/users', async ({ body }) => {
      const { name, email, password } = body as IUser;

      await userCase.execute({ name, email, password });

      return {
        status: 201,
        body: {
          message: 'User created successfully',
        },
      };
    });
  }
}
