import {Role} from "../entities/user.entity";

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}
