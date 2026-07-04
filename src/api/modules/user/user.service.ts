import { IUser } from './user.model';
import { UserRepository, userRepository } from './user.repository';

class UserService {
  private userRepository: UserRepository;

  constructor(repository: UserRepository = userRepository) {
    this.userRepository = repository;
  }

  getAllUsers = async (): Promise<IUser[]> => {
    return this.userRepository.getAllUsers();
  };

  getUserById = async (id: number): Promise<IUser | null> => {
    return this.userRepository.getUserById({ id });
  };
}

export const userService = new UserService();
