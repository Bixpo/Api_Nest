import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/DTO/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '2000-01-01',
  email: 'claudio@gmail.com.br',
  name: 'Claudio betinho',
  password: '123456',
  role: Role.User,
};
