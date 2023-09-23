import { Elysia } from 'elysia';
import { RegisterUser } from '@/core/user/service/RegisterUser';
import { RegisterUserController } from '@/adapters/user/RegisterUserController';
import { RepositoryUserPrisma } from '@/external/prisma/RepositoryUserPrisma';
import { FindUserEmail } from '@/core/user/service/FindUserEmail';
import { FindUserEmailController } from '@/adapters/user/FindUserEmailController';
import { FindUserId } from '@/core/user/service/FindUseId';
import { FindUserIdController } from '@/adapters/user/FindUserIdController';

const app = new Elysia();

const repository = new RepositoryUserPrisma();
const registerUser = new RegisterUser(repository);
const findUserEmail = new FindUserEmail(repository);
const findUserId = new FindUserId(repository);

new RegisterUserController(app, registerUser);
new FindUserEmailController(app, findUserEmail);
new FindUserIdController(app, findUserId);

app.listen(3000);
