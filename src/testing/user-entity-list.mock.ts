import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Claudio betinho',
    email: 'claudio@gmail.com.br',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '1237216371hdahsjvdaf',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'roberto betinho',
    email: 'roberto@gmail.com.br',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '1237sad216371hdahsjvdaf',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'beteh betinho',
    email: 'beteh@gmail.com.br',
    birthAt: new Date('2000-01-01'),
    id: 3,
    password: '1237asdcf216371hdahsjvdaf',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
