import { Elysia } from 'elysia';
import { RepositoryUserMemory } from '@/external/memory/RepositoryUserMemory';
import { RegisterUser } from '@/core/user/service/RegisterUser';
import { RegisterUserController } from '@/adapters/user/RegisterUserController';

const app = new Elysia();

const repository = new RepositoryUserMemory();
const registerUser = new RegisterUser(repository);

new RegisterUserController(app, registerUser);

app.listen(3000);
