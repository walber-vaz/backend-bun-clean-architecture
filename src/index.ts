import { Elysia } from 'elysia';
import { RegisterUser } from '@/core/user/service/RegisterUser';
import { RegisterUserController } from '@/adapters/user/RegisterUserController';
import { RepositoryUserPrisma } from '@/external/prisma/RepositoryUserPrisma';
import { FindUserEmail } from '@/core/user/service/FindUserEmail';
import { FindUserEmailController } from '@/adapters/user/FindUserEmailController';

const app = new Elysia();

const repository = new RepositoryUserPrisma();
const registerUser = new RegisterUser(repository);
const findUserEmail = new FindUserEmail(repository);

new RegisterUserController(app, registerUser);
new FindUserEmailController(app, findUserEmail);

app.listen(3000);
