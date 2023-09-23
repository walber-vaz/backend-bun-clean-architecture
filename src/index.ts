import { Elysia } from 'elysia';
import { RegisterUser } from '@/core/user/service/RegisterUser';
import { RegisterUserController } from '@/adapters/user/RegisterUserController';
import { RepositoryUserPrisma } from './external/prisma/RepositoryUserPrisma';

const app = new Elysia();

const repository = new RepositoryUserPrisma();
const registerUser = new RegisterUser(repository);

new RegisterUserController(app, registerUser);

app.listen(3000);
