import {BaseEntity} from "./base-entity.entity";

export enum Role {
  Administrator = 'Administrador',
}

export interface User extends BaseEntity {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  accessToken: string;
}
