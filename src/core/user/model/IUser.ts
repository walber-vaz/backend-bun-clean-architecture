export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IUserResponseFindUser {
  id?: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IAllUsersPerPage {
  users: IUserResponseFindUser[];
  skip: number;
  take: number;
  total: number;
  pages: number;
}
