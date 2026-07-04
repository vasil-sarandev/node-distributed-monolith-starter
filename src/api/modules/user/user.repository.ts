import { IUser } from './user.model';

const USERS_MOCK: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  },
  {
    id: 3,
    name: 'Jim Doe',
    email: 'jim.doe@example.com',
  },
  {
    id: 4,
    name: 'Jill Doe',
    email: 'jill.doe@example.com',
  },
];

export class UserRepository {
  constructor() {}

  getAllUsers = async (): Promise<IUser[]> => {
    return USERS_MOCK;
  };

  getUserById = async (filter: { id: number }): Promise<IUser | null> => {
    return USERS_MOCK.find((user) => user.id === filter.id) ?? null;
  };
}

export const userRepository = new UserRepository();
