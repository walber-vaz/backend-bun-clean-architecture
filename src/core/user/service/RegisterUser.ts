import { IUserCase } from '@/core/shared/IUserCase';
import { IRepositoryUser } from './IRepositoryUser';

type InputUserCase = {
  name: string;
  email: string;
  password: string;
};

export class RegisterUser implements IUserCase<InputUserCase, void> {
  constructor(private readonly repository: IRepositoryUser) {}

  async execute(input: InputUserCase): Promise<void> {
    const { name, email, password } = input;

    const userAlreadyExists = await this.repository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    await this.repository.create({ name, email, password });
  }
}
