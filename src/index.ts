import { Elysia } from 'elysia';
import { RegisterUser } from '@/core/user/service/RegisterUser';
import { RegisterUserController } from '@/adapters/user/RegisterUserController';
import { RepositoryUserPrisma } from '@/external/prisma/RepositoryUserPrisma';
import { FindUserId } from '@/core/user/service/FindUseId';
import { FindUserIdController } from '@/adapters/user/FindUserIdController';
import { FindAllUser } from '@/core/user/service/FindAllUser';
import { FindAllUserController } from '@/adapters/user/FindAllUserController';

const app = new Elysia();

const repository = new RepositoryUserPrisma();
const registerUser = new RegisterUser(repository);
const findUserId = new FindUserId(repository);
const findAllUsers = new FindAllUser(repository);

new RegisterUserController(app, registerUser);
new FindAllUserController(app, findAllUsers);
new FindUserIdController(app, findUserId);

app.listen(3000);
