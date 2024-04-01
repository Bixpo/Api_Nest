import { UpdatePutUserDTO } from '../user/DTO/update-put-user.dto';
import { Role } from '../enums/role.enum';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '2000-01-01',
  email: 'claudio@gmail.com.br',
  name: 'Claudio betinho',
  password: '123456',
  role: Role.User,
};
