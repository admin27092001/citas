import {BaseEntity} from "./base-entity.entity";
import {User} from "./user.entity";

export interface Appointment extends BaseEntity {
  appointmentId: string;
  procedure: string;
  startDate: Date;
  user: User;
}
